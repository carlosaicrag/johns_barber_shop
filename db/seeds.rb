# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Chair.destroy_all

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


