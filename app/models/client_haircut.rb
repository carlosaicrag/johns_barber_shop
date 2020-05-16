# == Schema Information
#
# Table name: client_haircuts
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  client_id  :integer          not null
#  haircut_id :integer          not null
#  barber_id  :integer          not null
#  closed_at  :datetime
#  chair_id   :integer          not null
#

class ClientHaircut < ApplicationRecord
    belongs_to :client,
        foreign_key: :client_id,
        class_name: :Client

    belongs_to :haircut,
        foreign_key: :haircut_id,
        class_name: :Haircut

    belongs_to :barber,
        foreign_key: :barber_id,
        class_name: :User

    def release_client(release_date)
        self.closed_at = release_date
        self.save!
    end

    def self.close_all_queues
        open_clients = ClientHaircut.where(closed_at: nil)
        
        open_clients.each do |user|
            user.closed_at = Time.now
            user.save
        end
    end
end
