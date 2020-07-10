json.barbers do 
  json.set! @barber.id do
    json.partial! 'api/barbers/barber', barber: @barber
  end
end