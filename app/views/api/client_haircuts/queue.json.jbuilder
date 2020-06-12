barber_queue = ClientHaircut.queue(current_user.id)
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
  next_in_line = ClientHaircut.next_in_line(current_user.id)
  json.clientHaircut do 
        json.id next_in_line.id
        json.clientFirstName next_in_line.client.fname
        json.clientLastName next_in_line.client.lname
        json.clientHaircut next_in_line.haircut.haircut_name
        json.queueLength barber_queue.length
        json.timeElapsed next_in_line.time_elapsed
  end
end

json.barber do
  json.set! current_user.id do
    json.partial! "api/users/user", user:current_user
  end
end