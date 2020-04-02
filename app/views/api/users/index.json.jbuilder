json.barbers do 
    @barbers.each do |barber|
        json.set! barber.id do 
            json.partial! "api/users/user", user:barber
            json.queueTime barber.wait_time
            if barber.current_client_cutting_hair
                json.currentClientStarttime do
                    json.hour barber.current_client_cutting_hair.hour
                    json.minute barber.current_client_cutting_hair.min
                    json.second barber.current_client_cutting_hair.sec
                end
            else
                json.currentClientStarttime do
                    json.hour 0
                    json.minite 0
                    json.second 0
                end
            end
        end
    end
end