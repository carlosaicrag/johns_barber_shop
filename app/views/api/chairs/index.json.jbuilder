json.chairs do 
    @chairs.each do |chair|
        json.set! chair.id do
            json.extract! chair, :id, :chair_name, :barber_id
            # json.waitTime chair.getWaitTime
            json.waitTime 45  #for testing 
        end
    end
end

json.barbers do
    @chairs.each do |chair|
        json.set! chair.barber.id do 
            json.partial! "api/users/user", user:chair.barber
        end
    end
end