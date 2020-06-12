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
end
