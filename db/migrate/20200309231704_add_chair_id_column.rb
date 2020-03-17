class AddChairIdColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :client_barber_haircuts, :chair_id, :integer, null:false
  end
end
