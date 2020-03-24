json.barbers do 
    @barbers.each do |barber|
        json.set! barber.id do 
            json.partial! "api/users/user", user:barber
        end
    end
end