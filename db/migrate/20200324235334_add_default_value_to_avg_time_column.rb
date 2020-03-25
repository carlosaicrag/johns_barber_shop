class AddDefaultValueToAvgTimeColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :client_haircut_avg_times, :avg_time, :integer, default: 45
  end
end
