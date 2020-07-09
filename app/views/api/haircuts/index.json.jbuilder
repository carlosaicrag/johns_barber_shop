json.haircuts do 
    @haircuts.each do |haircut|
        json.set! haircut.id do 
            json.extract! haircut, :id, :haircut_name, :path
        end
    end
end

json.barbers do 
    @barbers.each do |barber|
        json.set! barber.id do 
            json.extract! barber, :id, :image_url, :fname, :lname
            json.barberGravitar barber.gravitar
        end
    end
end