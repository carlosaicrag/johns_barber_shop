class RemoveNullConstraint < ActiveRecord::Migration[5.2]
  def change
    remove_column :client_haircut_times, :avg_time
    add_column :client_haircut_times, :avg_time, :integer, default: 45
  end
end
