class CreateClientHaircutAvgTimes < ActiveRecord::Migration[5.2]
  def change
    create_table :client_haircut_avg_times do |t|
      t.integer :client_id, null:false
      t.integer :haircut_id, null:false
      t.integer :avg_time, null:false

      t.timestamps
    end

    add_index :client_haircut_avg_times, :client_id
    add_index :client_haircut_avg_times, :haircut_id
    add_index :client_haircut_avg_times, [:client_id, :haircut_id], unique: true

  end
end
