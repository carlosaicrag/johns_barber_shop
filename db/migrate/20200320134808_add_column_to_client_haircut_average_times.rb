class AddColumnToClientHaircutAverageTimes < ActiveRecord::Migration[5.2]
  def change
    add_column :client_haircut_avg_times, :barber_id, :integer, null: false
  end
end
