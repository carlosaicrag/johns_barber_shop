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

require 'test_helper'

class ChairTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
