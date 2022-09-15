# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Faker::Internet.unique.clear
# Faker::Restaurant.unique.clear

puts"creating toy seeds"

t1= Toy.create(name:"Barbie Dream House", price: 224.99, brand: "Barbie", image: "http://slimages.macys.com/is/image/MCY/products/0/optimized/20793308_fpx.tif", description: "When young imaginations open the door to the Barbie Dream house they will discover unlimited storytelling possibilities")
t2= Toy.create(name:"Barbie Ballet Wishes Doll", price: 27.00, brand: "Barbie", image: "http://slimages.macys.com/is/image/MCY/products/0/optimized/21508446_fpx.tif", description: "Celebrate a special performance or inspire ballet dreams with Ballet Wishes Barbie doll. This beautiful Barbie doll is recital-ready with a satiny ballerina costume in pretty shades of pastel purple and blue and a matching multi-layered tulle skirt.")
t3= Toy.create(name:"Disney Pixar Lightyear Large Scale Space Ranger Alpha Buzz Lightyear Figure", price: 12.099, brand: "Disney", image: "http://slimages.macys.com/is/image/MCY/products/0/optimized/21924824_fpx.tif", description: "This large action figure presents Buzz Lightyear in his familiar Space Ranger Alpha suit. At 11.6 inches tall this high quality authentic toy has 12 movable joints for deluxe posability ready to recreate signature movie action.")
t4= Toy.create(name:"Disney Pride Mickey Large Plush", price: 21.99, brand: "Disney", image: "http://slimages.macys.com/is/image/MCY/products/0/optimized/21920262_fpx.tif", description: "At tall he will surely help create colorful memories and meaningful conversations between friends family co-workers classmates and pride supporters big and small.")
t5= Toy.create(name:"Wizarding World Hogwarts Castle", price: 79.099, brand: "Harry Potter", image: "http://slimages.macys.com/is/image/MCY/products/0/optimized/20096457_fpx.tif", description: "Create spellbinding adventures in Hogwarts Discover lights and sounds accessories and magical features in every room.")
t6= Toy.create(name:"Wizarding World Spellbinding Wand Dumbledore", price: 16.099, brand: "Harry Potter", image: "http://slimages.macys.com/is/image/MCY/products/0/optimized/20232852_fpx.tif", description: "Highly detailed authentic replica wand featuring a unique spell card perfect for endless role play fun.")
t7= Toy.create(name:"LEGO® Marvel Spidey and His Amazing Friends Hulk VS Rhino Truck Showdown Building Kit, 110 Pieces", price: 19.099, brand: "Lego", image: "http://slimages.macys.com/is/image/MCY/products/0/optimized/21735069_fpx.tif", description: "The LEGO Marvel Spidey and his amazing friends Hulk vs. Rhino Truck showdown (10782) building toy puts little Super Heroes in the driving seat as they race to save the day. Kids will love the battle wagons in this collectible buildable toy set.")
t8= Toy.create(name:"LEGO Star Wars Dark Trooper Attack Building Kit, Fun, Buildable Toy Play set, 166 Pieces", price: 34.99, brand: "Lego", image: "http://slimages.macys.com/is/image/MCY/products/0/optimized/21735244_fpx.tif", description: "Celebrate the return of Luke Skywalker in Star Wars - the Mandalorian season 2 with this buildable Dark Trooper attack play set (75324) for fans. It features an authentically detailed recreation of the scene inside the imperial light cruiser where Luke reappeared.")
t9= Toy.create(name:"Spidey and His Amazing Friends Web Quarters Playset", price: 66.99, brand: "Marvel", image: "http://slimages.macys.com/is/image/MCY/products/0/optimized/19793243_fpx.tif", description: "Your Spidey-sense signals that this web-quarters playset hums with activity for Spidey and pals; this arachno-hub seems to come alive with Spidey-speak light-up eyes and many cool corners to play in for loads of webtacular fun.")
t10= Toy.create(name:"Marvel Bend and Flex, Flex Rider Spider-Man and 2-In-1 Motorcycle", price: 21.99, brand: "Marvel", image: "http://slimages.macys.com/is/image/MCY/products/0/optimized/19079336_fpx.tif", description: "Twist! Turn! Kids can imagine speeding to the scene on a motorcycle then changing the vehicle into high-tech weapons to thwart the villain! Kids can bend flex pose and play with their favorite Marvel Super Heroes with these super agile Bend and Flex Figures! Collect characters inspired by Marvel Universe with a twist (each sold separately).")

puts"creating user seeds"
# 15.times do User.create(icon: "icon image",
#                     username: Faker::Internet.unique.username(specifier: 2..12),
#                     email: Faker::Internet.unique.email,
#                     password_digest: Faker::Internet.unique.password(min_length: 6, max_length: 20))
# end
u1= User.create(icon: "icon image", username: "shaquille.oatmeal", email: "jewel73@hotmail.com", password: "3QZ70G!6nx9q")
u2= User.create(icon: "icon image", username: "fast_and_the_curious", email: "dorthy_kshlerin@gmail.com", password: "36Lfd&*2s9*N")
u3= User.create(icon: "icon image", username: "cute.as.ducks", email: "lizzie15@hotmail.com", password: "i!62fUE50^OO")
u4= User.create(icon: "icon image", username: "HairyPoppins", email: "kitty_botsford96@yahoo.com", password: "7LA!MCq5n25l")
u5= User.create(icon: "icon image", username: "me_for_president", email: "presley89@gmail.com", password: "q7re&X3V!8QW")


puts"creating review seeds"
# 15.times do Review.create(user_id:rand(1..15),
#                     toy_id:rand(1..10),
#                     title: Faker::App.name,
#                     user_review: Faker::Restaurant.unique.review,
#                     rating:rand(1..10),
#                     location:Faker::Address.state)
# end
r1= Review.create(user_id: 1, toy_id: 1, title: "Great Toy", user_review: "Let my nephew play with this toy and he had a lot of fun.", rating: 10, location: "California")
r2= Review.create(user_id: 2, toy_id: 1, title: "So cool!", user_review: "Really good product, my daughter enjoyed playing with it and liked multi option of the toy. That expand his playing time and options of playing. The toy is good quality, easy to take out of the box which is plus as sometimes you spend ages to do it. Generally I would recommend it.", rating: 10, location: "Vermont")
r3= Review.create(user_id: 3, toy_id: 1, title: "Disapointing", user_review: "When unpackaged though, we both found that other than an image on the back of the box, it was a little hard to understand what it was meant to do and what each item was for.", rating: 3, location: "Texas")
r4= Review.create(user_id: 4, toy_id: 1, title: "Worth the money", user_review: "Recently purchased this for my kids who are finally old enough to appreciate it and they love it so much!", rating: 10, location: "South Dakota")


puts"done!"