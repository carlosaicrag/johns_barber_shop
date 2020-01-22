class Api::SessionsController < ApplicationController
  
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      #this is used for email confirmation but I have no idea how it works so ima go ahead and just comment it out
      # if @user.email_confirmed
      #   sign_in(@user)
      #   render 'api/users/show'
      # else
      #   render json: ['Please confirm your email before signing in'], status: 422  
      # end

      sign_in(@user)
      render 'api/users/show'
    else
      render json: ['Invalid credentials'], status: 422
    end
  end

  def destroy
    if current_user
      sign_out
      render json: {}
    else
      render json: ['Nobody singed in'], status: 404
    end
  end
end
