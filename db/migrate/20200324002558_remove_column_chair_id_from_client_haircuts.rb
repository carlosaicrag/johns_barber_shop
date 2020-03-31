class RemoveColumnChairIdFromClientHaircuts < ActiveRecord::Migration[5.2]
  def change
    remove_column :client_haircuts, :chair_id
  end
end
