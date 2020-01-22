class ChangeBarbersToUsers < ActiveRecord::Migration[5.2]
  def change
    rename_table :barbers, :users
  end
end
