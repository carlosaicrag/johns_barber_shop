class Api::BarbersController < ApplicationController
  def index
    @barbers = Barber.where(working: true)
  end

  def create
    @barber = Barber.new(barber_params)
    if Barber.valid_barber_shop_password?(params[:barber][:barber_shop_password])
      if @barber.save
        # SendEmailJob.set(wait: 0.5.seconds).perform_later(@barber.id)
        sign_in(@barber)
        # render json: ["Please check your email (#{@barber.email})"]
        render 'api/barbers/show'
      else
        render json: @barber.errors.full_messages, status: 422
      end
    else
      render json: ["Incorrect Barber Shop Password"], status: 422
    end
  end

  def update 
    Barber.change_working_status(current_barber)
    client_haircut = ClientHaircut.where(barber_id: current_barber.id).where(closed_at: [nil]).order('created_at asc')[0]
    client_haircut.started_haircut_time = DateTime.now
    client_haircut.save!
    @barber = current_barber
    render "api/client_haircuts/queue"
  end

  def show
    @barber = Barber.find(params[:id])
    render :show
  end

  def confirm_email
    barber = Barber.find_by_confirm_token(params[:id])
    if barber
      barber.email_activate
    end
  end

  def new_pass_form
    barber = Barber.find_by_reset_password_token(params[:id])
    
    if barber && barber.password_token_valid?
      @link_valid = true
    else
      @link_valid = false
    end
  end

  private
  def barber_params
    params.require(:barber).permit(:password, :email, :fname,:lname, :working)
  end

end