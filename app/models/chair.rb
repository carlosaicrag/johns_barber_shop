class Chair < ApplicationRecord
    validates :barber_id, presence: true
    validates :chair_name, presence: true

    belongs_to :barber,
        foreign_key: :barber_id,
        class_name: :User
end
