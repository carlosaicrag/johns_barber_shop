class AddBarberIdColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :client_haircut_avg_times, :barber_id, :integer, null:false

    remove_index :client_haircut_avg_times, name: "index_client_haircut_avg_times_on_client_id_and_haircut_id"
    add_index :client_haircut_avg_times, :barber_id
  end
end
