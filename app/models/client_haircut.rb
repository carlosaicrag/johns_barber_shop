# == Schema Information
#
# Table name: client_haircuts
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  client_id  :integer          not null
#  haircut_id :integer          not null
#  barber_id  :integer          not null
#  closed_at  :datetime
#  chair_id   :integer          not null
#

class ClientHaircut < ApplicationRecord
  belongs_to :client,
    foreign_key: :client_id,
    class_name: :Client

  belongs_to :haircut,
    foreign_key: :haircut_id,
    class_name: :Haircut

  belongs_to :barber,
    foreign_key: :barber_id,
    class_name: :Barber

  MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  def release_client
    self.closed_at = DateTime.now
    self.save!
  end

  def self.close_all_queues
    open_clients = ClientHaircut.where(closed_at: nil)
    
    open_clients.each do |barber|
      barber.closed_at = Time.now
      barber.save
    end
  end

  def date
    date = {}
    date["month"] = MONTHS[self.created_at.month+1]
    date["day"] = self.created_at.day
    date["year"] = self.created_at.year
    date
  end

  def time_taken
    hours_to_mins = (self.closed_at.hour - self.started_haircut_time.hour)*60
    mins = (self.closed_at.min-self.started_haircut_time.min).abs
    hours_to_mins + mins
  end

  def haircut_time 
    hour_to_mins_created_at = self.started_haircut_time.hour * 60
    total_minutes_created_at = hour_to_mins_created_at + self.started_haircut_time.min

    hour_to_mins_closed_at = self.closed_at.hour * 60
    total_minutes_started_at = hour_to_mins_closed_at + self.closed_at.min
    (total_minutes_created_at - total_minutes_started_at).abs
  end
  
  def self.client_already_in_a_queue?(current_client_user)
    client_haircut = ClientHaircut.where(client_id: current_client_user.id).where(closed_at:nil)
    if client_haircut.length == 0 
      return false
    else
      return true
    end
  end

  def self.next_in_line(barber_id)
    barber = Barber.find(barber_id)
    if barber.cutting_hair
        return barber.current_client[0]
    else
        queue = queue(barber_id).where(started_haircut_time: nil).first
        return queue
    end
  end

  def self.queue(barber_id)
    barbers_queue = ClientHaircut.where(barber_id: barber_id).where(closed_at: nil).order('created_at asc').includes(:client).includes(:haircut)
    barbers_queue
  end

  def time_elapsed
    elapsed_time = {}
    if !self.started_haircut_time
      elapsed_time["mins"] = 0 
      elapsed_time["seconds"] = 0
    else
      self_hour_to_mins = self.started_haircut_time.hour * 60
      date_time_now = DateTime.now
      date_time_hours_to_mins = date_time_now.hour * 60
      date_time_mins = date_time_now.min
      date_time_seconds_to_mins = date_time_now.sec/60
      elapsed_time["mins"] = ((date_time_hours_to_mins + date_time_mins + date_time_seconds_to_mins) - (self_hour_to_mins + self.started_haircut_time.min + self.started_haircut_time.sec/60)).abs
      elapsed_time["seconds"] = (date_time_now.sec - self.started_haircut_time.sec).abs
      return elapsed_time
    end
  end
end
