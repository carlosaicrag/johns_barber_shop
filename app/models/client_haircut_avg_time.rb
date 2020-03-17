# == Schema Information
#
# Table name: client_haircut_avg_times
#
#  id         :bigint           not null, primary key
#  client_id  :integer          not null
#  haircut_id :integer          not null
#  avg_time   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ClientHaircutAvgTime < ApplicationRecord
    belongs_to :client,
        foreign_key: :client_id,
        class_name: :Client

    belongs_to :haircut,
        foreign_key: :haircut_id,
        class_name: :Haircut
end
