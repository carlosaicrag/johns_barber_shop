class AddStartedHaircutTime < ActiveRecord::Migration[5.2]
  def change
    add_column :client_haircuts, :started_haircut_time, :datetime
  end
end
