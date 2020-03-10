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
  validates :phone_num, presence: true, uniqueness: true
  validates :chair_id, :date, :time, presence: true

  belongs_to :chair

  has_many :client_haircuts,
  foreign_key: :client_id,
  class_name: :ClientHaircut

  has_many :haircut_avg_times,
    foreign_key: :client_id,
    class_name: :ClientHaircutAvgTime

  has_many :haircuts,
    through: :haircut_avg_times,
    source: :haircut

  has_many :barbers,
    through: :client_haircuts,
    source: :barber

  has_many :chairs,
    through: :client_haircuts,
    source: :chair

end
