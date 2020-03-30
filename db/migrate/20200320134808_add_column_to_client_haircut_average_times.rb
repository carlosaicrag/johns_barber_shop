class AddColumnToClientHaircutAverageTimes < ActiveRecord::Migration[5.2]
  def change
    create_table :client_haircut_avg_times do |t|
      t.integer :client_id, null:false
      t.integer :haircut_id,null:false
      t.integer :barber_id, null:false
      t.integer :avg_time, default: 45
      t.timestamps
    end