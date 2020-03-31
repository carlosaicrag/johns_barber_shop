class UniquConstraintOnClientHaircutAvgTime < ActiveRecord::Migration[5.2]
  def change
    rename_table :client_haircut_avg_times, :client_haircut_times
    add_index :client_haircut_times, [:client_id, :haircut_id, :barber_id], :unique => true, name: "index_on_combo_barber_client_haircut_id"
  end
end
