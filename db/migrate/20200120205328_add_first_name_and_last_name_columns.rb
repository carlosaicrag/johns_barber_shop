class AddFirstNameAndLastNameColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :fname, :string, null:false, default:0
    add_column :users, :lname, :string, null:false, default:0

    change_column :users, :fname, :string, default: nil
    change_column :users, :lname, :string, default: nil
  end
end
