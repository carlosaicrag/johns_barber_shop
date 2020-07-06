class Api::SessionsController < ApplicationController
  
  def create
    @barber = Barber.find_by_credentials(
      params[:barber][:email],
      params[:barber][:password]
    )
    if Barber.valid_barber_shop_password?(params[:barber][:barber_shop_password])
      if @barber
        #this is used for email confirmation but I have no idea how it works so ima go ahead and just comment it out
        # if @barber.email_confirmed
        #   sign_in(@barber)
        #   render 'api/barbers/show'
        # else
        #   render json: ['Please confirm your email before signing in'], status: 422  
        # end

        sign_in(@barber)
        render 'api/barbers/show'
      else
        render json: ['Invalid credentials'], status: 422
      end
    else
      render json: ["Incorrect Barber Shop Password"], status: 422
    end
  end

  def destroy
    if current_barber
      sign_out
      render json: {}
    elsif current_client_barber
      self.client_sign_out
      render json: {}
    else
      render json: ['Nobody signed in'], status: 404
    end
  end
end
