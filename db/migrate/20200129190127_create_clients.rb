class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.string :fname
      t.string :lname
      t.string :phone_num, null: false
      t.integer :chair_id, null: false
      t.string :date, null: false
      t.string :time, null: false 
      t.timestamps
    end
    add_index :clients, :phone_num, unique: true 
    add_index :clients, :chair_id 
  end
end
