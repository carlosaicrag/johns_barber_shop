# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

armando = User.create(username: "Armando123", email:"armando@gmail.com",password:"*mwFMYKvQeLNS7vT",fname:"Armando", lname:"Garcia")
julisa = User.create(username:"Julisa123", email:"julissa@gmail.com", password:"*mwFMYKvQeLNS7vT", fname:"Julissa", lname:"Garcia")
sandra = User.create(username:"Sandra123", email:"sandra@gmail.com", password:"*mwFMYKvQeLNS7vT", fname:"Sandra", lname:"Garcia")
carlos = User.create(username:"Carlos123", email:"carlos@gmail.com", password:"*mwFMYKvQeLNS7vT", fname:"Carlos", lname:"Garcia")
melina = User.create(username:"Melina123", email:"melina@gmail.com", password:"*mwFMYKvQeLNS7vT", fname:"Melina", lname:"Silva")

