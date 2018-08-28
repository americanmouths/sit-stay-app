# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

kayla = Owner.create(name: "Kayla", phone: "7604195602", email: "shiverr@gmail.com")
bella = Pet.create(name: "bella", age: 2, breed: "boxer", gender: "female", color: "brindle", owner_id: kayla.id)
address = Address.create(owner_id: kayla, street: "4091 mira costa st", city: "oceanside", state: "ca", zipcode: 92056)
walk = Service.create(service_type: "dog walk", duration: 20, date: Date.new, owner_id: kayla)
