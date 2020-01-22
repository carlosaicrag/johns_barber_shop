class ChangeUsersToBarbers < ActiveRecord::Migration[5.2]
  def change
    rename_table :users, :barbers
  end
end
