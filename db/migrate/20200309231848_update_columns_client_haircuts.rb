class UpdateColumnsClientHaircuts < ActiveRecord::Migration[5.2]
  def change
    remove_column :client_haircuts, :client_id
    remove_column :client_haircuts, :haircut_id
    remove_column :client_haircuts, :avg_haircut_time

    add_column :client_haircuts, :client_id, :integer, null:false
    add_column :client_haircuts, :haircut_id, :integer, null:false
    add_column :client_haircuts, :avg_haircut_time, :integer, null:false
  end
end
