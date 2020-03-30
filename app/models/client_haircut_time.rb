class ClientHaircutTime < ApplicationRecord
    def self.avg_time(client_id,haircut_id,barber_id)
        ClientHaircutTime
        .where(client_id:client_id, haircut_id: haircut_id, barber_id: barber_id)
    end
end
