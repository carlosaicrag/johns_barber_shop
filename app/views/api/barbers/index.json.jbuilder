json.barbers do 
    @barbers.each do |barber|
        json.set! barber.id do 
            json.partial! "api/barbers/barber", barber:barber
            json.barberGravitar barber.gravitar
            if barber.cutting_hair
                json.queueTime barber.active_queue_time
                json.avgTime barber.current_client_cutting_hair_avg_time
            else
                json.queueTime barber.wait_time
                json.avgTime 0
            end
            json.totalWaitTime barber.wait_time
        end
    end
end

json.clientHaircuts do
    ClientHaircut.where(closed_at: nil).each do |client_haircut|
        json.set! client_haircut.id do 
            json.extract! client_haircut, :id, :barber_id, :client_id, :haircut_id
        end
    end
end

json.clients do 
    if @current_client_user
        if @current_client_user.in_queue?
            json.set! @current_client_user.id do 
                json.partial! "api/clients/client", client: @current_client_user
                json.waitTime @current_client_user.wait_time
            end
        end
    end
    json.duck "duck"
end