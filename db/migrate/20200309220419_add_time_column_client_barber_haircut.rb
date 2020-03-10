class AddTimeColumnClientBarberHaircut < ActiveRecord::Migration[5.2]
  def change
    add_column :client_barber_haircuts, :time, :integer, null: false

    remove_column :client_barber_haircuts, :client_id
    remove_column :client_barber_haircuts, :haircut_id
    remove_column :client_barber_haircuts, :barber_id

    add_column :client_barber_haircuts, :client_id, :integer, null: false
    add_column :client_barber_haircuts, :haircut_id, :integer, null: false
    add_column :client_barber_haircuts, :barber_id, :integer, null: false

  end
end
