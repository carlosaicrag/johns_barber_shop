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



  has_many :haircuts,
    through: :haircut_avg_times,
    source: :haircut

  has_many :barbers,
    through: :client_haircuts,
    source: :barber

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    client = Client.find_by(email: email.downcase)
    return nil unless client && client.valid_password?(password)
    client
  end

  def downcase_fields
    self.username.downcase!
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
    self.save!
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
