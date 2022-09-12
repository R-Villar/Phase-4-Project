# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts"creating toy seeds"

t1= Toy.create(name:"Fluff", price: 15, brand: "petsmart", image: "https://media.istockphoto.com/photos/feathered-pole-cat-toy-picture-id120093997?k=20&m=120093997&s=612x612&w=0&h=eoCD7aLSZxDIJiIkOQkHMKh1NVai7vHvVz0UgI3FBHI=", description: "Cats can play with feather")
t2= Toy.create(name:"Ball", price: 10, brand: "petsmart", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/indoor-dog-toys-1587002073.jpg?crop=1.00xw:0.751xh;0,0.161xh&resize=1200:*", description: "Dogs love to eat this ball")

puts"creating user seeds"
u1= User.create(icon: "insert icon", username: "doglover123", email: "doglover123@gmail.com", password_digest: "ilovedogs")
u2= User.create(icon: "insert icon", username: "catlover123", email: "catlover123@gmail.com", password_digest: "ilovecats")

puts"creating review seeds"
r1= Review.create(user_id: 1, toy_id: 1, title: "Great Toy", user_review: "love this toy!", rating: 10, location: "United States")
r2= Review.create(user_id: 2, toy_id: 2, title: "Not the best toy", user_review: "my dog didn't like this", rating: 1, location: "Mexico")

puts"done!"