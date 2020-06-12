class Api::UsersController < ApplicationController
  def index
    @barbers = User.where(working: true)
  end

  def create
    @user = User.new(user_params)
    if User.valid_barber_shop_password?(params[:user][:barber_shop_password])
      if @user.save
        # SendEmailJob.set(wait: 0.5.seconds).perform_later(@user.id)
        sign_in(@user)
        # render json: ["Please check your email (#{@user.email})"]
        render 'api/users/show'
      else
        render json: @user.errors.full_messages, status: 422
      end
    else
      render json: ["Incorrect Barber Shop Password"], status: 422
    end
  end

  def update 
    User.change_working_status(current_user)
    client_haircut = ClientHaircut.where(barber_id: current_user.id).where(closed_at: [nil]).order('created_at asc')[0]
    client_haircut.started_haircut_time = DateTime.now
    client_haircut.save!
    @user = current_user
    render "api/client_haircuts/queue"
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def confirm_email
    user = User.find_by_confirm_token(params[:id])
    if user
      user.email_activate
    end
  end

  def new_pass_form
    user = User.find_by_reset_password_token(params[:id])
    
    if user && user.password_token_valid?
      @link_valid = true
    else
      @link_valid = false
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :email, :fname,:lname, :working)
  end

end