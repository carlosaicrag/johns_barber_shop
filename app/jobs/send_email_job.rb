class SendEmailJob < ApplicationJob
  queue_as :default

  def perform(userId)
    return if userId.nil?

    BarberMailer.confirmation_email(userId).deliver_later
  end
end
