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

require 'test_helper'

class HaircutTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
