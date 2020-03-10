class AddDateColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :client_barber_haircuts, :time
    add_column :client_barber_haircuts, :closed_at, :datetime
  end
end
