barber_queue = ClientHaircut.queue(current_barber.id)
if barber_queue.length == 0
  duck = {"min"=>0,"sec"=>0}
  json.clientHaircut do 
      json.id "duck"
      json.clientFirstName "N/A"
      json.clientLastName "N/A"
      json.clientHaircut "N/A"
      json.queueLength 0
      json.timeElapsed duck
  end
else
  next_in_line = ClientHaircut.next_in_line(current_barber.id)
  if next_in_line
    json.clientHaircut do 
          json.id next_in_line.id
          json.clientFirstName next_in_line.client.fname
          json.clientLastName next_in_line.client.lname
          json.clientHaircut next_in_line.haircut.haircut_name
          json.queueLength barber_queue.length
          json.timeElapsed next_in_line.time_elapsed
    end
  else
    json.clientHaircut do 
      json.id "duck"
      json.clientFirstName "N/A"
      json.clientLastName "N/A"
      json.clientHaircut "N/A"
      json.queueLength 0
      json.timeElapsed duck
  end
  end
end

json.barber do
  json.set! current_barber.id do
    json.partial! "api/barbers/barber", barber:current_barber
  end
end