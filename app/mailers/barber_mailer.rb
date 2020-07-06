class BarberMailer < ApplicationMailer
    default from: "carlosaicrag@gmail.com"

    def confirmation_email(userId)
        @user = Barber.find(userId)
        return if @user.nil?
        
        mail(to: @user.email, subject: 'AppName Email Confirmation 🍊')
    end

    def forgot_password_email(user)
        @user = user
        return if @user.nil?
        
        mail(to: @user.email, subject: 'AppName Password Reset 🔑')
    end
end