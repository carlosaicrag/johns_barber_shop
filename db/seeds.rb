# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Barber.destroy_all
Client.destroy_all
Haircut.destroy_all
ClientHaircutTime.destroy_all
ClientHaircut.destroy_all

barber1 = Barber.create(email:"carlosaicrag@gmail.com", password:"starwars", fname:"Carlos", lname:"Garcia", image_url:"./dame_dolla.jpg")
barber2 = Barber.create(email:"james@gmail.com",password:"starwars",fname:"James", lname:"Harden", image_url:"./james_harden.jpg", working: true)
barber3 = Barber.create(email:"kyrie@gmail.com", password:"starwars", fname:"Kyrie", lname:"Irving", image_url:"./kyrie_irving.jpg", working: true)
barber4 = Barber.create(email:"lebron@gmail.com", password:"starwars", fname:"Lebron", lname:"James", image_url:"./lbj.jpg", working: true)
barber5 = Barber.create(email:"steph@gmail.com", password:"starwars", fname:"Steph", lname:"Curry", image_url:"./steph_curry_barber.jpg", working: true)
barber6 = Barber.create(email:"love@gmail.com", password:"starwars", fname:"Kevin", lname:"Love", image_url:"./steph_curry_barber.jpg")

client1 = Client.create!(fname: 'Carlos', lname: 'Garcia', email: "carlosaicrag@gmail.com",password:"password")
client2 = Client.create!(fname: 'Joe', lname: 'TwinkleToes',email: "joetwinkletoes@gmail.com",password:"password")
client3 = Client.create!(fname: 'Simon', lname: 'Rainbow', email: "simonrainbow@gmail.com",password:"password")
client4 = Client.create!(fname: 'Gerald', lname: 'Geraldson', email: "geraldgeraldson@gmail.com",password:"password")
client5 = Client.create!(fname: 'Wambam', lname: 'Kazam', email: "wambamkazam@gmail.com",password:"password")
client6 = Client.create!(fname: 'Bob', lname: 'Pancake', email: "boppancake@gmail.com",password:"password")

haircut1 = Haircut.create!(haircut_name: "Afro-Fade", path:"./Afro-Fade-Haircut.jpg" )
haircut2 = Haircut.create!(haircut_name: "Bald-Fade", path:"./Bald-Fade-Haircut.jpg" )
haircut3 = Haircut.create!(haircut_name: "Buzz", path:"./Buzz-Haircut.jpg" )
haircut4 = Haircut.create!(haircut_name: "Comb-Over-2", path:"./Comb-Over-2-Haircut.jpg" )
haircut5 = Haircut.create!(haircut_name: "Comb-Over", path:"./Comb-Over-Haircut.jpg" )
haircut6 = Haircut.create!(haircut_name: "High-Fade", path:"./High-Fade-Haircut.jpg" )
haircut7 = Haircut.create!(haircut_name: "Low-Fade", path:"./Low-Fade-Haircut.jpg" )
haircut8 = Haircut.create!(haircut_name: "Mens-Disconnected-Pompadour", path:"./Mens-Disconnected-Pompadour-Haircut.jpg" )
haircut9 = Haircut.create!(haircut_name: "Mid-Fade", path:"./Mid-Fade-Haircut.jpg" )
haircut10 = Haircut.create!(haircut_name: "Natural-fauxhawks-with-line-up", path:"./Natural-fauxhawks-with-line-up.jpg" )
haircut11 = Haircut.create!(haircut_name: "Pompadour-Fade", path:"./Pompadour-Fade-Haircut.jpg" )
haircut12 = Haircut.create!(haircut_name: "Quiff", path:"./Quiff-Haircut.jpg" )
haircut13 = Haircut.create!(haircut_name: "Short-high-fade", path:"./Short-high-fade-haircut.jpg" )
haircut14 = Haircut.create!(haircut_name: "Side-Part", path:"./Side-Part-Haircut.jpg" )
haircut15 = Haircut.create!(haircut_name: "Slicked-Back", path:"./Slicked-Back-Haircut.jpg" )
haircut16 = Haircut.create!(haircut_name: "Spiky", path:"./Spiky-Haircut.jpg" )
haircut17 = Haircut.create!(haircut_name: "Taper-Fade", path:"./Taper-Fade-Haircut.jpg" )
haircut18 = Haircut.create!(haircut_name: "Temple-Fade", path:"./Temple-Fade-Haircut.jpg" )
haircut19 = Haircut.create!(haircut_name: "Top-Knot", path:"./Top-Knot-Haircut.jpg" )
haircut20 = Haircut.create!(haircut_name: "Undercut-CombOver", path:"./Undercut-CombOver-Haircut.jpg" )
haircut21 = Haircut.create!(haircut_name: "Undercut-Haircut-Fade", path:"./Undercut-Haircut-Fade.jpg" )

client_haircut_avg_time1 = ClientHaircutTime.create!(client_id: client1.id, haircut_id: haircut1.id, barber_id: barber1.id, avg_time: 60)
client_haircut_avg_time2 = ClientHaircutTime.create!(client_id: client2.id, haircut_id: haircut3.id, barber_id: barber1.id, avg_time: 40)
client_haircut_avg_time3 = ClientHaircutTime.create!(client_id: client3.id, haircut_id: haircut1.id, barber_id: barber2.id)
client_haircut_avg_time4 = ClientHaircutTime.create!(client_id: client4.id, haircut_id: haircut1.id, barber_id: barber2.id)
client_haircut_avg_time5 = ClientHaircutTime.create!(client_id: client5.id, haircut_id: haircut2.id, barber_id: barber3.id, avg_time: 45)

client_haircut_user1 = ClientHaircut.create!(client_id: client1.id, haircut_id: haircut1.id, barber_id: barber1.id)
sleep 1.5
client_haircut_user2 = ClientHaircut.create!(client_id: client2.id, haircut_id: haircut3.id, barber_id: barber1.id)
sleep 1.5
client_haircut_user3 = ClientHaircut.create!(client_id: client3.id, haircut_id: haircut1.id, barber_id: barber2.id)
sleep 1.5
client_haircut_user4 = ClientHaircut.create!(client_id: client4.id, haircut_id: haircut1.id, barber_id: barber2.id) 
sleep 1.5
client_haircut_user4 = ClientHaircut.create!(client_id: client5.id, haircut_id: haircut2.id, barber_id: barber3.id) 


