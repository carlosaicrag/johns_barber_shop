class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token
  helper_method :current_barber, :signed_in?, :client_signed_in?, :current_client_user
  
  private
  def current_barber
    @current_barber ||= Barber.find_by_session_token(session[:barber_session_token])
  end

  def signed_in?
    !!current_barber
  end

  def sign_in(barber)
    barber.reset_token!
    barber.clock_in
    barber.save!
    session[:barber_session_token] = barber.session_token
    @current_barber = barber
  end

  def sign_out
    current_barber.reset_token!
    current_barber.clock_out
    current_barber.save!
    session[:barber_session_token] = nil
  end

  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end

  def current_client_user
    @current_client_user ||= Client.find_by(session_token: session[:client_session_token])
  end

  def client_signed_in?
    !!current_client_user
  end

  def client_sign_in(client)
    client.reset_token!
    client.save!
    session[:client_session_token] = client.session_token
    @current_client_user = client
  end

  def client_sign_out
    current_client_user.reset_token!
    current_client_user.save!
    session[:client_session_token] = nil
  end

  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end
end