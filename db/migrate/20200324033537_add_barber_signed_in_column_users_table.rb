class AddBarberSignedInColumnUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :working, :boolean, default: false
  end
end
