class ChangeColumnTypeClientHaircut < ActiveRecord::Migration[5.2]


  def change
    remove_column :client_haircuts, :avg_time
  end
end
