class ClientHaircutTime < ApplicationRecord
    def self.avg_time(client_id,haircut_id,barber_id,client_haircut_params)
        client_haircut_time = ClientHaircutTime
                    .where(client_id:client_id, haircut_id: haircut_id, barber_id: barber_id)

         if client_haircut_time.length == 0
            client_haircut_time = ClientHaircutTime.new(client_haircut_params)
        else
            client_haircut_time = client_haircut_time[0]
        end

        client_haircut_time
    end

    def self.update_avg(client_haircut)
        client_haircut_time = ClientHaircutTime.where(client_id: client_haircut.client_id, haircut_id: client_haircut.haircut_id, barber_id: client_haircut.barber_id)[0]
        avg_time = (client_haircut_time.avg_time + client_haircut.haircut_time)/2
        if avg_time > 45 
            client_haircut_time.avg_time = avg_time
            client_haircut_time.save!
        end
    end
end
