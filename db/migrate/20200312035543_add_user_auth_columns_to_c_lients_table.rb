class AddUserAuthColumnsToCLientsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :clients, :password_digest, :string, null:false
    add_column :clients, :session_token, :string, null:false
  end
end
