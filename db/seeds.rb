puts "seeding user data"

akeem = User.create(username: "Docfrost", password_digest: "Willtherebevictory?!", email: "AkeemS11788@gmail.com")

puts "seeding category data"

buying = Category.create(name: "Buying")
selling = Category.create(name: "Selling")
requesting = Category.create(name: "Requesting Service")
offering = Category.create(name: "Offering Service")

puts "seeding test post data"

Post.create(
    title: "Looking for a good Roofing Company", 
    content: "Hi, I'm looking for a good roofing company to provide an estimate for replacing a shingle roof. Please call me at 111-111-1111 to set up time for an estimate. Thanks!",
    category_id: 3,
    user_id: 1    
)


