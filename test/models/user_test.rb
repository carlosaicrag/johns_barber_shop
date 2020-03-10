# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  username               :string           not null
#  password_digest        :string           not null
#  session_token          :string           not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  email                  :string           not null
#  email_confirmed        :boolean          default(FALSE)
#  confirm_token          :string
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  fname                  :string           not null
#  lname                  :string           not null
#  image_url              :string           not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
