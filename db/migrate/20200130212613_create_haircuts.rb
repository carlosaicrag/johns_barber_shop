class CreateHaircuts < ActiveRecord::Migration[5.2]
  def change
    create_table :haircuts do |t|
      t.string :haircut_name, null:false
      t.string :path, null:false
      t.timestamps
    end

    add_index :haircuts, :haircut_name, unique:true
    add_index :haircuts, :path, unique:true
  end
end
