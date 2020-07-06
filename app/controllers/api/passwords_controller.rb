class Api::PasswordsController < ApplicationController
  def forgot
    if params[:email].blank?
      return render json: ['Email not present'], status: :not_found
    end

    barber = Barber.find_by(email: params[:email].downcase)
    client = Client.find_by(email: params[:email].downcase)

    if barber
      user = barber
    elsif client 
      user = client
    end
    if user.present?
      user.generate_password_token!
      BarberMailer.forgot_password_email(user).deliver_now
      render json: ['Please check your email'], status: :ok
    else
      render json: ['Email address not found. Please try again.'], status: :not_found
    end
  end

  def reset
    token = params[:token].to_s

    if params[:token].blank?
      @no_token = true
      return
    end

    user = Barber.find_by(reset_password_token: token)
    
    if user.present? && user.password_token_valid?
      if user.reset_password!(params[:password])
        @link_valid = true
      else
        flash[:errors] = user.errors.full_messages
        redirect_to new_pass_form_api_user_url(token)
      end
    else
      @link_valid = false
    end
  end

  private

  def password_params
    params.permit(:token, :password)
  end
end