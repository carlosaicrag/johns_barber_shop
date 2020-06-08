json.barbers do 
    @barbers.each do |barber|
        json.set! barber.id do 
            json.partial! "api/users/user", user:barber
            json.gravitar barber.gravitar
            json.queueTime barber.wait_time
            if barber.current_client_cutting_hair_starting_time
                json.currentClientStarttime do
                    json.hour barber.current_client_cutting_hair_starting_time.hour
                    json.minute barber.current_client_cutting_hair_starting_time.min
                    json.second barber.current_client_cutting_hair_starting_time.sec
                    json.avgTime barber.current_client_cutting_hair_avg_time
                end
            else
                json.currentClientStarttime do
                    json.hour 0
                    json.minute 0
                    json.second 0
                    json.avg_time 0
                end
            end
        end
    end
end

json.clientHaircuts do
    @barbers.each do |barber|
        barber.clients_in_queue.each do |client|
            json.set! client.id do 
                json.extract! client, :id, :barber_id, :client_id, :haircut_id
            end
        end
    end
end