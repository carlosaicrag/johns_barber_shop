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

carlos = User.create(username:"Carlos123", email:"carlos@gmail.com", password:"*mwFMYKvQeLNS7vT", fname:"Carlos", lname:"Garcia")
armando = User.create(username: "Armando123", email:"armando@gmail.com",password:"*mwFMYKvQeLNS7vT",fname:"Armando", lname:"Garcia")
julisa = User.create(username:"Julisa123", email:"julissa@gmail.com", password:"*mwFMYKvQeLNS7vT", fname:"Julissa", lname:"Garcia")
sandra = User.create(username:"Sandra123", email:"sandra@gmail.com", password:"*mwFMYKvQeLNS7vT", fname:"Sandra", lname:"Garcia")
melina = User.create(username:"Melina123", email:"melina@gmail.com", password:"*mwFMYKvQeLNS7vT", fname:"Melina", lname:"Silva")

#there will never be more than 5 chairs. specific to the johns barber shop
chair1 = Chair.create(barber_id: carlos.id, chair_name: "chair1")
chair2 = Chair.create(barber_id: armando.id, chair_name: "chair1")
chair3 = Chair.create(barber_id: julisa.id, chair_name: "chair1")
chair4 = Chair.create(barber_id: sandra.id, chair_name: "chair1")
chair5 = Chair.create(barber_id: melina.id, chair_name: "chair1")

client1 = Client.create(fname: 'Bob', lname: 'Pancake', phone_num: '8055650000', chair_id: chair1.id, date: '01/30/20', time: '12:00:00')
client1 = Client.create(fname: 'Joe', lname: 'TwinkleToes', phone_num: '8055650000', chair_id: chair2.id, date: '01/30/20', time: '12:00:00')
client1 = Client.create(fname: 'Simon', lname: 'Rainbow', phone_num: '8055650000', chair_id: chair3.id, date: '01/30/20', time: '12:00:00')
client1 = Client.create(fname: 'Gerald', lname: 'Geraldson', phone_num: '8055650000', chair_id: chair4.id, date: '01/30/20', time: '12:00:00')
client1 = Client.create(fname: 'Wambam', lname: 'Kazam', phone_num: '8055650000', chair_id: chair2.id, date: '01/30/20', time: '13:00:00')

haircut1 = Haircut.create(haircut_name: "Burst-Fade-Mohawk", path:"./Burst-Fade-Mohawk.jpg" )
haircut2 = Haircut.create(haircut_name: "Buzz-Cut-Fade", path:"./Buzz-Cut-Fade.jpg" )
haircut3 = Haircut.create(haircut_name: "Calculated_Pompadour", path:"./Calculated_Pompadour.jpg" )
haircut4 = Haircut.create(haircut_name: "Chaotic_Pompadour", path:"./Chaotic_Pompadour.jpg" )
haircut5 = Haircut.create(haircut_name: "Clean-cut-low-fade", path:"./Clean-cut-low-fade.jpg" )
haircut6 = Haircut.create(haircut_name: "Exemplary_Pompadour_Haircut", path:"./Exemplary_Pompadour_Haircut.jpg" )
haircut7 = Haircut.create(haircut_name: "Faux-Hawk-Fade", path:"./Faux-Hawk-Fade.jpg" )
haircut8 = Haircut.create(haircut_name: "High_Pompadour_Fade", path:"./High_Pompadour_Fade.jpg" )
haircut9 = Haircut.create(haircut_name: "High-and-Tight-Fade", path:"./High-and-Tight-Fade.jpg" )
haircut10 = Haircut.create(haircut_name: "High-Top-Fade", path:"./High-Top-Fade.jpg" )
haircut11 = Haircut.create(haircut_name: "Long_Hair_Brushed_Back_Mens_Hairstyle", path:"./Long_Hair_Brushed_Back_Mens_Hairstyle.jpg" )
haircut12 = Haircut.create(haircut_name: "Long-Crew-Cut-Tapered-Sides", path:"./Long-Crew-Cut-Tapered-Sides.jpg" )
haircut13 = Haircut.create(haircut_name: "Low_Pompadour_Haircut_Fade", path:"./Low_Pompadour_Haircut_Fade.jpg" )
haircut14 = Haircut.create(haircut_name: "Low-Fade-Haircut-Thick-Wavy-Hair", path:"./Low-Fade-Haircut-Thick-Wavy-Hair.jpg" )
haircut15 = Haircut.create(haircut_name: "Medium_Pompadour_Haircut_Fade", path:"./Medium_Pompadour_Haircut_Fade.jpg" )
haircut16 = Haircut.create(haircut_name: "Natural-fauxhawks-with-line-up", path:"./Natural-fauxhawks-with-line-up.jpg" )
haircut17 = Haircut.create(haircut_name: "Pompadour_Haircut_with_Side_Part_Undercut", path:"./Pompadour_Haircut_with_Side_Part_Undercut.jpg" )
haircut18 = Haircut.create(haircut_name: "Pompadour_Undercut", path:"./Pompadour_Undercut.jpg" )
haircut19 = Haircut.create(haircut_name: "Pompadour_with_Long_Hair", path:"./Pompadour_with_Long_Hair.jpg" )
haircut20 = Haircut.create(haircut_name: "Present_day_Pompadour_Haircut", path:"./Present_day_Pompadour_Haircut.jpg" )
haircut21 = Haircut.create(haircut_name: "Shaved_Down_Pompadour_Haircut", path:"./Shaved_Down_Pompadour_Haircut.jpg" )
haircut22 = Haircut.create(haircut_name: "Short_Pompadour", path:"./Short_Pompadour.jpg" )
haircut23 = Haircut.create(haircut_name: "Short-Combed-Back-Undercut-Hairstyle", path:"./Short-Combed-Back-Undercut-Hairstyle.jpg" )
haircut24 = Haircut.create(haircut_name: "Short-high-fade", path:"./Short-high-fade.jpg" )
haircut25 = Haircut.create(haircut_name: "Short-Textured-Crop-Top-Fade", path:"./Short-Textured-Crop-Top-Fade.jpg" )
haircut26 = Haircut.create(haircut_name: "Side-Part-Fade", path:"./Side-Part-Fade.jpg" )
haircut27 = Haircut.create(haircut_name: "Side-Part-Fade", path:"./Side-Part-Fade.jpg" )
haircut28 = Haircut.create(haircut_name: "Side-Part-Hairstyle-High-Bald-Fade", path:"./Side-Part-Hairstyle-High-Bald-Fade.jpg" )
haircut29 = Haircut.create(haircut_name: "Twirled_Pompadour", path:"./Twirled_Pompadour.jpg" )
haircut30 = Haircut.create(haircut_name: "Wavy_Pompadour", path:"./Wavy_Pompadour.jpg" )




















