class ChangeClientHaircutColumn < ActiveRecord::Migration[5.2]
  def change
    remove_index :client_haircuts, name: "index_client_haircuts_on_client_id_and_haircut_id"
  end
end
