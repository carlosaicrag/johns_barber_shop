class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token
  helper_method :current_user, :signed_in?, :client_signed_in?, :current_client_user
  
  private
  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in(user)
    user.reset_token!
    user.clock_in
    user.save!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def sign_out
    current_user.try(:reset_token!)
    current_user.clock_out
    current_user.save!
    session[:session_token] = nil
  end

  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end

  def current_client_user
    @current_client_user ||= Client.find_by(session_token: session[:session_token])
  end

  def client_signed_in?
    !!current_client_user
  end

  def client_sign_in(client)
    client.reset_token!
    session[:session_token] = client.session_token
    @current_client_user = client
  end

  def client_sign_out
    current_client_user.try(:reset_token!)
    session[:session_token] = nil
  end

  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end
end