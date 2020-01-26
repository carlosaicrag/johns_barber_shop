require 'test_helper'

class ChairsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get chairs_index_url
    assert_response :success
  end

  test "should get show" do
    get chairs_show_url
    assert_response :success
  end

  test "should get edit" do
    get chairs_edit_url
    assert_response :success
  end

end
