task close_all_queues: :environment do
  puts "emptying queues"
  ClientHaircut.close_all_queues
  puts "all queues emptied"
end

task reset_database: :environment do
  ""
end
