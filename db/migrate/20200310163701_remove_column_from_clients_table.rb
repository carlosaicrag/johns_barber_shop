class RemoveColumnFromClientsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :clients, :date
    remove_column :clients, :time
    remove_column :clients, :chair_id
    remove_column :clients, :fname
    remove_column :clients, :lname

    add_column :clients, :email, :string, null:false
    add_column :clients, :fname, :string, null:false
    add_column :clients, :lname, :string, null:false
  end
end
