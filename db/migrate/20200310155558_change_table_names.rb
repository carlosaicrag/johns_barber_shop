class ChangeTableNames < ActiveRecord::Migration[5.2]
  def change
    rename_table :client_haircuts, :client_haircut_avg_time
    rename_table :client_barber_haircuts, :client_haircuts
  end
end
