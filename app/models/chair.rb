# == Schema Information
#
# Table name: chairs
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  barber_id  :integer          not null
#  chair_name :string           not null
#

class Chair < ApplicationRecord
    validates :barber_id, presence: true
    validates :chair_name, presence: true

    belongs_to :barber,
        foreign_key: :barber_id,
        class_name: :User

    has_many :client_haircuts,
        foreign_key: :chair_id,
        class_name: :ClientHaircut

    def getWaitTime()
        client_ids = self.client_haircuts.where(closed_at: nil).pluck(:client_id)
        if client_ids.length == 0 
            return 0;
        else
            sumWaitTime = ClientHaircutAvgTime.select(:avg_time).where(client_id: client_ids)
            .pluck(:avg_time)
            .sum
        end
    end
end
