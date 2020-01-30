class Client < ApplicationRecord
  validates :phone_num, presence: true, uniqueness: true
  validates :chair_id, :date, :time, presence: true

  belongs_to :chair
end
