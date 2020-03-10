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

require 'test_helper'

class ClientHaircutAvgTimeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
