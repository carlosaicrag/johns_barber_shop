class RenameUsersTableToBarbers < ActiveRecord::Migration[5.2]
  def change
    rename_table :users, :barbers
  end
end
