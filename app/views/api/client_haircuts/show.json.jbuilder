json.clientHaircut do 
    json.set! @client_haircut.id do 
        json.partial! "api/client_haircuts/client_haircut", client_haircut: @client_haircut
    end
end

if @client_haircut_avg_time
    json.clientHaircutAvgTime do 
        json.set! @client_haircut_avg_time.id do
            json.extract! @client_haircut_avg_time, :client_id, :barber_id, :haircut_id, :avg_time
        end
    end
end