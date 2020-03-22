class AddIndicesToClientHaircuts < ActiveRecord::Migration[5.2]
  def change
    add_index :client_haircuts, :client_id
    add_index :client_haircuts, :haircut_id
    add_index :client_haircuts, [:client_id, :haircut_id], unique: true

  end
end
