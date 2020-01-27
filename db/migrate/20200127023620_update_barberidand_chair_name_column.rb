class UpdateBarberidandChairNameColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :chairs, :barber_id
    remove_column :chairs, :chair_name

    add_column :chairs, :barber_id, :integer, null: false
    add_column :chairs, :chair_name, :string, null: false
  end
end
