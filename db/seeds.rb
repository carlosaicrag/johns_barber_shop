# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Chair.destroy_all
Client.destroy_all
Haircut.destroy_all

carlos = User.create(username:"dame123", email:"dame@gmail.com", password:"*mwFMYKvQeLNS7vT", fname:"Damian", lname:"lillard", image_url:"dame_dolla.jpg")
armando = User.create(username: "james123", email:"james@gmail.com",password:"*mwFMYKvQeLNS7vT",fname:"James", lname:"Harden", image_url:"james_harden.jpg")
julisa = User.create(username:"kyrie123", email:"kyrie@gmail.com", password:"*mwFMYKvQeLNS7vT", fname:"Kyrie", lname:"Irving", image_url:"kyrie_irving.jpg")
sandra = User.create(username:"lebron123", email:"lebron@gmail.com", password:"*mwFMYKvQeLNS7vT", fname:"Lebron", lname:"James", image_url:"lbj.jpg")
melina = User.create(username:"steph123", email:"steph@gmail.com", password:"*mwFMYKvQeLNS7vT", fname:"Steph", lname:"Curry", image_url:"steph_curry_barber.jpg")

#there will never be more than 5 chairs. specific to johns barber shop
chair1 = Chair.create(barber_id: carlos.id, chair_name: "chair1")
chair2 = Chair.create(barber_id: armando.id, chair_name: "chair1")
chair3 = Chair.create(barber_id: julisa.id, chair_name: "chair1")
chair4 = Chair.create(barber_id: sandra.id, chair_name: "chair1")
chair5 = Chair.create(barber_id: melina.id, chair_name: "chair1")

client1 = Client.create(fname: 'Bob', lname: 'Pancake', phone_num: '8055650000', chair_id: chair1.id, date: '01/30/20', time: '12:00:00')
client1 = Client.create(fname: 'Joe', lname: 'TwinkleToes',phone_num: '8055650000', chair_id: chair2.id, date: '01/30/20', time: '12:00:00')
client1 = Client.create(fname: 'Simon', lname: 'Rainbow', phone_num: '8055650000', chair_id: chair3.id, date: '01/30/20', time: '12:00:00')
client1 = Client.create(fname: 'Gerald', lname: 'Geraldson', phone_num: '8055650000', chair_id: chair4.id, date: '01/30/20', time: '12:00:00')
client1 = Client.create(fname: 'Wambam', lname: 'Kazam', phone_num: '8055650000', chair_id: chair2.id, date: '01/30/20', time: '13:00:00')

haircut1 = Haircut.create(haircut_name: "Afro-Fade-Haircut", path:"./Afro-Fade-Haircut.jpg" )
haircut2 = Haircut.create(haircut_name: "Bald-Fade-Haircut", path:"./Bald-Fade-Haircut.jpg" )
haircut3 = Haircut.create(haircut_name: "Buzz-Haircut", path:"./Buzz-Haircut.jpg" )
haircut4 = Haircut.create(haircut_name: "Comb-Over-2-Haircut", path:"./Comb-Over-2-Haircut.jpg" )
haircut5 = Haircut.create(haircut_name: "Comb-Over-Haircut", path:"./Comb-Over-Haircut.jpg" )
haircut6 = Haircut.create(haircut_name: "High-Fade-Haircut", path:"./High-Fade-Haircut.jpg" )
haircut7 = Haircut.create(haircut_name: "Low-Fade-Haircut", path:"./Low-Fade-Haircut.jpg" )
haircut8 = Haircut.create(haircut_name: "Mens-Disconnected-Pompadour-Haircut", path:"./Mens-Disconnected-Pompadour-Haircut.jpg" )
haircut9 = Haircut.create(haircut_name: "Mid-Fade-Haircut", path:"./Mid-Fade-Haircut.jpg" )
haircut10 = Haircut.create(haircut_name: "Natural-fauxhawks-with-line-up", path:"./Natural-fauxhawks-with-line-up.jpg" )
haircut11 = Haircut.create(haircut_name: "Pompadour-Fade-Haircut", path:"./Pompadour-Fade-Haircut.jpg" )
haircut12 = Haircut.create(haircut_name: "Quiff-Haircut", path:"./Quiff-Haircut.jpg" )
haircut13 = Haircut.create(haircut_name: "Short-high-fade-haircut", path:"./Short-high-fade-haircut.jpg" )
haircut14 = Haircut.create(haircut_name: "Side-Part-Haircut", path:"./Side-Part-Haircut.jpg" )
haircut15 = Haircut.create(haircut_name: "Slicked-Back-Haircut", path:"./Slicked-Back-Haircut.jpg" )
haircut16 = Haircut.create(haircut_name: "Spiky-Haircut", path:"./Spiky-Haircut.jpg" )
haircut17 = Haircut.create(haircut_name: "Taper-Fade-Haircut", path:"./Taper-Fade-Haircut.jpg" )
haircut18 = Haircut.create(haircut_name: "Temple-Fade-Haircut", path:"./Temple-Fade-Haircut.jpg" )
haircut19 = Haircut.create(haircut_name: "Top-Knot-Haircut", path:"./Top-Knot-Haircut.jpg" )
haircut20 = Haircut.create(haircut_name: "Undercut-CombOver-Haircut", path:"./Undercut-CombOver-Haircut.jpg" )
haircut21 = Haircut.create(haircut_name: "Undercut-Haircut-Fade", path:"./Undercut-Haircut-Fade.jpg" )





















