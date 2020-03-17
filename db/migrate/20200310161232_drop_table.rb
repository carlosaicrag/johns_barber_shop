class DropTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :client_haircut_avg_time
  end
end
