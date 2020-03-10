# == Schema Information
#
# Table name: haircuts
#
#  id           :bigint           not null, primary key
#  haircut_name :string           not null
#  path         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Haircut < ApplicationRecord
    validates :haircut_name, :path, uniqueness:true, presence:true
    
    has_many :client_haircuts,
        foreign_key: :haircut_id,
        class_name: :ClientHaircut

    has_many :client_haircut_avg_times,
        foreign_key: :haircut_id,
        class_name: :ClientHaircutAvgTime
end
