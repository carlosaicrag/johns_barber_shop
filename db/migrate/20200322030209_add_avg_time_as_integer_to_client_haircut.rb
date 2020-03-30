class AddAvgTimeAsIntegerToClientHaircut < ActiveRecord::Migration[5.2]
  def change
    add_column :client_haircuts, :avg_time, :integer
  end
end
