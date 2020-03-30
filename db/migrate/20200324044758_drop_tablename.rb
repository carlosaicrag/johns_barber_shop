class DropTablename < ActiveRecord::Migration[5.2]
  def change
    drop_table :chairs
  end
end
