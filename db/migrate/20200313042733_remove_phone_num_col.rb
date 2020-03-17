class RemovePhoneNumCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :clients, :phone_num
  end
end
