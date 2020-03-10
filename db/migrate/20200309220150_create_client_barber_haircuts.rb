class CreateClientBarberHaircuts < ActiveRecord::Migration[5.2]
  def change
    create_table :client_barber_haircuts do |t|
      t.integer :client_id
      t.integer :haircut_id
      t.integer :barber_id

      t.timestamps
    end

    add_index :client_barber_haircuts, :client_id
    add_index :client_barber_haircuts, :haircut_id
    add_index :client_barber_haircuts, :barber_id
  end
end
