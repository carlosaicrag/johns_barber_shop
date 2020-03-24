# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Client.destroy_all
Haircut.destroy_all

barber1 = User.create(email:"dame@gmail.com", password:"*mwFMYKvQeLNS7vT", fname:"Damian", lname:"lillard", image_url:"./dame_dolla.jpg", working: true)
barber2 = User.create(email:"james@gmail.com",password:"*mwFMYKvQeLNS7vT",fname:"James", lname:"Harden", image_url:"./james_harden.jpg", working: true)
barber3 = User.create(email:"kyrie@gmail.com", password:"*mwFMYKvQeLNS7vT", fname:"Kyrie", lname:"Irving", image_url:"./kyrie_irving.jpg", working: true)
barber4 = User.create(email:"lebron@gmail.com", password:"*mwFMYKvQeLNS7vT", fname:"Lebron", lname:"James", image_url:"./lbj.jpg", working: true)
barber5 = User.create(email:"steph@gmail.com", password:"*mwFMYKvQeLNS7vT", fname:"Steph", lname:"Curry", image_url:"./steph_curry_barber.jpg", working: true)
barber6 = User.create(email:"steph@gmail.com", password:"*mwFMYKvQeLNS7vT", fname:"Steph", lname:"Curry", image_url:"./steph_curry_barber.jpg")

client1 = Client.create!(fname: 'Bob', lname: 'Pancake', email: "boppancake@gmail.com",password:"password")
client2 = Client.create!(fname: 'Joe', lname: 'TwinkleToes',email: "joetwinkletoes@gmail.com",password:"password")
client3 = Client.create!(fname: 'Simon', lname: 'Rainbow', email: "simonrainbow@gmail.com",password:"password")
client4 = Client.create!(fname: 'Gerald', lname: 'Geraldson', email: "geraldgeraldson@gmail.com",password:"password")
client5 = Client.create!(fname: 'Wambam', lname: 'Kazam', email: "wambamkazam@gmail.com",password:"password")

haircut1 = Haircut.create!(haircut_name: "Afro-Fade-Haircut", path:"./Afro-Fade-Haircut.jpg" )
haircut2 = Haircut.create!(haircut_name: "Bald-Fade-Haircut", path:"./Bald-Fade-Haircut.jpg" )
haircut3 = Haircut.create!(haircut_name: "Buzz-Haircut", path:"./Buzz-Haircut.jpg" )
haircut4 = Haircut.create!(haircut_name: "Comb-Over-2-Haircut", path:"./Comb-Over-2-Haircut.jpg" )
haircut5 = Haircut.create!(haircut_name: "Comb-Over-Haircut", path:"./Comb-Over-Haircut.jpg" )
haircut6 = Haircut.create!(haircut_name: "High-Fade-Haircut", path:"./High-Fade-Haircut.jpg" )
haircut7 = Haircut.create!(haircut_name: "Low-Fade-Haircut", path:"./Low-Fade-Haircut.jpg" )
haircut8 = Haircut.create!(haircut_name: "Mens-Disconnected-Pompadour-Haircut", path:"./Mens-Disconnected-Pompadour-Haircut.jpg" )
haircut9 = Haircut.create!(haircut_name: "Mid-Fade-Haircut", path:"./Mid-Fade-Haircut.jpg" )
haircut10 = Haircut.create!(haircut_name: "Natural-fauxhawks-with-line-up", path:"./Natural-fauxhawks-with-line-up.jpg" )
haircut11 = Haircut.create!(haircut_name: "Pompadour-Fade-Haircut", path:"./Pompadour-Fade-Haircut.jpg" )
haircut12 = Haircut.create!(haircut_name: "Quiff-Haircut", path:"./Quiff-Haircut.jpg" )
haircut13 = Haircut.create!(haircut_name: "Short-high-fade-haircut", path:"./Short-high-fade-haircut.jpg" )
haircut14 = Haircut.create!(haircut_name: "Side-Part-Haircut", path:"./Side-Part-Haircut.jpg" )
haircut15 = Haircut.create!(haircut_name: "Slicked-Back-Haircut", path:"./Slicked-Back-Haircut.jpg" )
haircut16 = Haircut.create!(haircut_name: "Spiky-Haircut", path:"./Spiky-Haircut.jpg" )
haircut17 = Haircut.create!(haircut_name: "Taper-Fade-Haircut", path:"./Taper-Fade-Haircut.jpg" )
haircut18 = Haircut.create!(haircut_name: "Temple-Fade-Haircut", path:"./Temple-Fade-Haircut.jpg" )
haircut19 = Haircut.create!(haircut_name: "Top-Knot-Haircut", path:"./Top-Knot-Haircut.jpg" )
haircut20 = Haircut.create!(haircut_name: "Undercut-CombOver-Haircut", path:"./Undercut-CombOver-Haircut.jpg" )
haircut21 = Haircut.create!(haircut_name: "Undercut-Haircut-Fade", path:"./Undercut-Haircut-Fade.jpg" )

client_haircut_user1 = ClientHaircut.create!(client_id: client1.id, haircut_id: haircut1.id, barber_id: barber1.id, avg_time: 45)
client_haircut_user2 = ClientHaircut.create!(client_id: client2.id, haircut_id: haircut2.id, barber_id: barber1.id, avg_time: 45)
client_haircut_user3 = ClientHaircut.create!(client_id: client3.id, haircut_id: haircut3.id, barber_id: barber1.id, avg_time: 45)
client_haircut_user4 = ClientHaircut.create!(client_id: client4.id, haircut_id: haircut3.id, barber_id: barber1.id, avg_time: 45)
client_haircut_user5 = ClientHaircut.create!(client_id: client5.id, haircut_id: haircut6.id, barber_id: barber1.id, avg_time: 45)

# client_haircut_avg_times_user1 = ClientHaircutAvgTime.create(client_id: client1.id, haircut_id: haircut1.id, avg_time: 45, barber_id: barber1.id)
# client_haircut_avg_times_user2 = ClientHaircutAvgTime.create(client_id: client2.id, haircut_id: haircut2.id, avg_time: 45, barber_id: barber2.id)
# client_haircut_avg_times_user3 = ClientHaircutAvgTime.create(client_id: client3.id, haircut_id: haircut3.id, avg_time: 45, barber_id: barber2.id)
# client_haircut_avg_times_user4 = ClientHaircutAvgTime.create(client_id: client4.id, haircut_id: haircut3.id, avg_time: 45, barber_id: barber3.id)
# client_haircut_avg_times_user5 = ClientHaircutAvgTime.create(client_id: client5.id, haircut_id: haircut6.id, avg_time: 45, barber_id: barber4.id)
