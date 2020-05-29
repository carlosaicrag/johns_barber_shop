# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  username               :string           not null
#  password_digest        :string           not null
#  session_token          :string           not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  email                  :string           not null
#  email_confirmed        :boolean          default(FALSE)
#  confirm_token          :string
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  fname                  :string           not null
#  lname                  :string           not null
#  image_url              :string           not null
#

class User < ApplicationRecord
  validates :session_token, presence: true, uniqueness: {case_sensitive: false}
  validates :email, presence: true,
            format: { with: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i,
                    message: "Please enter proper email format" },
            uniqueness: { case_sensitive: false }
  validates :password_digest, presence: { message: 'Password can\'t be blank' }
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :barber_shop_password, length: { minimum: 6, allow_nil: true }
  validates :fname, :lname, presence: true
  validates :working, inclusion: { in: [true, false]} 

  after_initialize :ensure_session_token
  # before_create :ensure_confirmation_token, :downcase_fields

  attr_reader :password, :barber_shop_password

  has_many :client_haircuts,
    foreign_key: :barber_id,
    class_name: :ClientHaircut
              
  has_many :clients, 
    through: :client_haircuts,
    source: :haircut

  
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email.downcase)
    return nil unless user && user.valid_password?(password)
    user
  end

  def gravitar 
    "https://www.gravatar.com/avatar/#{Digest::MD5.hexdigest(self.email)}"
  end

  def clients_in_queue
    clients = ClientHaircut.where(closed_at: nil, barber_id: self.id)
    clients
  end

  def downcase_fields
    self.username.downcase!
    self.email.downcase!
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def wait_time
    open_haircuts = ClientHaircut.where(closed_at: nil, barber_id: self.id).pluck(:client_id)
    ClientHaircutTime.where(client_id: open_haircuts).where(barber_id: self.id).pluck(:avg_time).sum
  end

  def current_client #current client that the barber is cutting hair for
    ClientHaircut.where(barber_id: self.id, closed_at: nil).where.not(started_haircut_time: nil)
  end

  def current_client_cutting_hair_starting_time #the starting time of the current client the barber is cutting hair for
    current_client_cutting_hair = current_client
    current_client_cutting_hair[0] ? current_client_cutting_hair[0].started_haircut_time : nil
  end

  def current_client_cutting_hair_avg_time #the avg time that it takes for the barber to cut his/hers current clients hair 
    current_client_cutting_hair = current_client
    avg_time = ClientHaircutTime.where(client_id: current_client_cutting_hair[0].client_id) 
    .where(barber_id: current_client_cutting_hair[0].barber_id)
    .where(haircut_id: current_client_cutting_hair[0].haircut_id)
    .select(:avg_time)[0].avg_time
    
    avg_time ? avg_time : 45
  end

  def self.valid_barber_shop_password?(password)
    return true if password == "*mwFMYKvQeLNS7vT"
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def clock_in
    self.working = true
  end

  def clock_out
    self.working = false
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

  def change_working_status 
    self.cutting_hair = !self.cutting_hair
    self.save!
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
