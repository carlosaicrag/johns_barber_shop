class CreateClientHaircuts < ActiveRecord::Migration[5.2]
  def change
    create_table :client_haircuts do |t|
      t.integer :client_id
      t.integer :haircut_id
      t.integer :avg_haircut_time
    end

    add_index :client_haircuts, :client_id
    add_index :client_haircuts, :haircut_id
  end
end
