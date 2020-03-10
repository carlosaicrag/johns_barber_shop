# == Schema Information
#
# Table name: clients
#
#  id         :bigint           not null, primary key
#  phone_num  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  email      :string           not null
#  fname      :string           not null
#  lname      :string           not null
#

require 'test_helper'

class ClientTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
