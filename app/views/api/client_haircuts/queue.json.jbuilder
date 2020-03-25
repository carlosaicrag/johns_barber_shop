@client_haircuts.each do |client_haircut|
    json.set! client_haircut.id do 
        json.id client_haircut.id
        json.clientFirstName client_haircut.client.fname
        json.clientLastName client_haircut.client.lname
        json.clientHaircut client_haircut.haircut.haircut_name
    end
end