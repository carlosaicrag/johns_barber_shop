class ChangeColumnChairsBarberId < ActiveRecord::Migration[5.2]
  def change
    change_column :chairs, :barber_id, :integer, :null => true
  end
end
