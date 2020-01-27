

json.chairs do 
    @chairs.each do |chair|
        json.set! chair.id do 
            json.extract! chair, :id, :chair_name
        end
    end
end