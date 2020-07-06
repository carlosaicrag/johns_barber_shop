# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class BarberMailerPreview < ActionMailer::Preview
    def confirmation_email_preview
        BarberMailer.confirmation_email(Barber.first.id)
    end

    def forgot_password_email_preview
        BarberMailer.forgot_password_email(Barber.first.id)
    end
end