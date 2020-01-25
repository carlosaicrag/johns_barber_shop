class CreateChairs < ActiveRecord::Migration[5.2]
  def change
    create_table :chairs do |t|
      t.integer :barber_id
      t.string :chair_name
      
      t.timestamps
    end
  end
end
