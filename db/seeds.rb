puts "seeding user data"

akeem = User.create(username: "Docfrost", password_digest: "Willtherebevictory?!", email: "AkeemS11788@gmail.com", admin: true)

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
Post.create(
    title: "Looking for a desk lamp", 
    content: "Hi, I'm looking for a good desk lamp, about a foot tall and in good condition. Please call me at 111-111-1111 with any offers or pictures to Proline@gmail.com. Thanks!",
    category_id: 1,
    user_id: 1    
)
Post.create(
    title: "Selling a 2002 Ford Focus", 
    content: "Hi, I'm looking to sell my previous vehicle. It's a 2002 Ford SVT Focus with a little over 140k miles. Please call me at 111-111-1111 with any offers. Can provide pictures at user request Thanks!",
    category_id: 2,
    user_id: 1    
)
Post.create(
    title: "Townsland Roofing", 
    content: "Roofing company offering new construction and repairs 6 days a week. Please call me at 111-111-1111 to set up time for an estimate. Thanks!",
    category_id: 4,
    user_id: 1    
)
Post.create(
    title: "Looking for a good Flooring Company", 
    content: "Hi, I'm looking for a good flooring company to provide an estimate for replacing a wood floors. Please call me at 111-111-1111 to set up time for an estimate. Thanks!",
    category_id: 3,
    user_id: 1    
)
Post.create(
    title: "Looking for a desk", 
    content: "Hi, I'm looking for a good desk, in good condition. Please call me at 111-111-1111 with any offers or pictures to Proline@gmail.com. Thanks!",
    category_id: 1,
    user_id: 1    
)
Post.create(
    title: "Selling a 2002 Ford Taurus", 
    content: "Hi, I'm looking to sell my previous vehicle. It's a 2002 Ford Taurus with a little over 140k miles. Please call me at 111-111-1111 with any offers. Can provide pictures at user request Thanks!",
    category_id: 2,
    user_id: 1    
)
Post.create(
    title: "Townsland Drywall", 
    content: "Drywall company offering new construction and repairs 6 days a week. Please call me at 111-111-1111 to set up time for an estimate. Thanks!",
    category_id: 4,
    user_id: 1    
)
Post.create(
    title: "Looking for a good Home Renovation Company", 
    content: "Hi, I'm looking for a good renovation company to provide an estimate for a Kitchen and Bathroom Remodel. Please call me at 111-111-1111 to set up time for an estimate. Thanks!",
    category_id: 3,
    user_id: 1    
)
Post.create(
    title: "Looking for a Tennis Court Net", 
    content: "Hi, I'm looking for a good Tennis court net, no tears please. Please call me at 111-111-1111 with any offers or pictures to Proline@gmail.com. Thanks!",
    category_id: 1,
    user_id: 1    
)
Post.create(
    title: "Selling a 2020 BMW 335xi", 
    content: "Hi, I'm looking to sell my previous vehicle. It's a 2020 BMW 335xi with a little over 20k miles. Please call me at 111-111-1111 with any offers. Can provide pictures at user request Thanks!",
    category_id: 2,
    user_id: 1    
)
Post.create(
    title: "Highline Remodels", 
    content: "Renovation company offering new construction and repairs 6 days a week. Please call me at 111-111-1111 to set up time for an estimate. Thanks!",
    category_id: 4,
    user_id: 1    
)


