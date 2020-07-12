# == Schema Information
#
# Table name: clients
#
#  id         :bigint           not null, primary key
#  phone_num  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  email      :string           not null
#  fname      :string           not null
#  lname      :string           not null
#

class Client < ApplicationRecord
  validates :session_token, presence: true, uniqueness: {case_sensitive: false}
  validates :email, presence: true,
            format: { with: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i,
                    message: "Please enter proper email format" },
            uniqueness: { case_sensitive: false }
  validates :password_digest, presence: { message: 'Password can\'t be blank' }
  validates :fname, :lname, :email, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  has_many :client_haircuts,
  foreign_key: :client_id,
  class_name: :ClientHaircut

  before_create :downcase_fields

  has_many :haircuts,
    through: :haircut_avg_times,
    source: :haircut

  has_many :barbers,
    through: :client_haircuts,
    source: :barber 

  after_initialize :ensure_session_token
  MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  def self.find_by_credentials(email, password)
    client = Client.find_by(email: email.downcase)
    return nil unless client && client.valid_password?(password)
    client
  end

  def in_queue?
    ClientHaircut.where(closed_at: nil).each do |client_haircut|
        if client_haircut.client_id == self.id
          return true 
        end
    end
    false
  end

  def barber_waiting_in_queue_for 
    ClientHaircut.where(closed_at: nil).each do |client_haircut|
        if client_haircut.client_id == self.id
          return Barber.where(barber_id: client_haircut.barber_id)
        end
    end
  end

  def wait_time
    
  end

  def date_started
    starting_date = {}
    starting_date["month"] = MONTHS[self.created_at.month-1]
    starting_date["day"] = self.created_at.day
    starting_date["year"] = self.created_at.year

    starting_date
  end

  def retrieve_clients_client_haircuts
    ClientHaircut.where(client_id: self.id).where.not(closed_at: nil)
  end

  def number_of_haircuts
    self.retrieve_clients_client_haircuts.length
  end

  def gravitar 
    "https://www.gravatar.com/avatar/#{Digest::MD5.hexdigest(self.email)}"
  end

  def downcase_fields
    self.email.downcase!
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.session_token
  end

  def email_activate
    self.email_confirmed = true
    self.confirm_token = nil
    save!(:validate => false)
  end

  def generate_password_token!
    self.reset_password_token = password_reset_token
    self.reset_password_sent_at = Time.now.utc
    save!(:validate => false)
  end

  def password_token_valid?
    (self.reset_password_sent_at + 4.hours) > Time.now.utc
  end

  def reset_password!(password)
    self.password = password
    if save
      self.reset_password_token = nil
      true
    else
      nil
    end
  end

  private

  def password_reset_token
    SecureRandom.urlsafe_base64.to_s
  end

  def ensure_confirmation_token
    self.confirm_token ||= SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end  
end
