class Api::SessionsController < ApplicationController
  
  def create
    @barber = Barber.find_by_credentials(
      params[:barber][:email],
      params[:barber][:password]
    )

    if @barber
      if Barber.valid_barber_shop_password?(params[:barber][:barber_shop_password])
        sign_in(@barber)
        render 'api/barbers/show'
      else
        render json: ["Incorrect Barber Shop Password"], status: 422
      end
    else
      render json: ['Invalid credentials'], status: 422
    end
  end

  def destroy
    if signed_in?
      sign_out
      render json: {}
    elsif client_signed_in?
      client_sign_out
      render json: {}
    else
      render json: ['Nobody signed in'], status: 404
    end
  end
end
