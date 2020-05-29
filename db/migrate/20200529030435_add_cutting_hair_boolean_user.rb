class AddCuttingHairBooleanUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :cutting_hair, :boolean, default: false
  end
end
