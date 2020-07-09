json.clients do 
  json.set! client.id do 
    json.extract! client, :id, :fname, :lname, :created_at
    json.clientGravitar client.gravitar
  end
end

json.client_haircuts do 
  client.retrieve_clients_client_haircuts.each do |client_haircut|
    json.set! client_haircut.id do
      json.partial! "api/barbers/barber", barber: client_haircut.barber
      json.partial! "api/haircuts/haircut", haircut: client_haircut.haircut
      client_haircut.time_taken
    end
  end
end