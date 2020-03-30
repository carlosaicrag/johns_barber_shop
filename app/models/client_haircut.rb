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
end
