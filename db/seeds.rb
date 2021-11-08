Product.destroy_all
Category.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')

puts "#{User.count} users created"

@category1 = Category.create!(title: 'electronics')
@category2 = Category.create!(title: 'appliances')
@category3 = Category.create!(title: 'apparel')
@category4 = Category.create!(title: 'Movies, Music & Games')
@category5 = Category.create!(title: 'Books')
@category6 = Category.create!(title: 'Outdoors')
@category7 = Category.create!(title: 'Home life & Furniture')
@category8 = Category.create!(title: 'crafts')

puts "#{Category.count} categories created"

@test1 = Product.create!(title: 'kitchen set', description: 'This is a kitchen set for a kitchen, don\t know what else to tell you really.', price: '99.99', image: 'https://assets.epicurious.com/photos/5947ead7214b311c5ab9e3c1/6:4/w_1600%2Cc_limit/pottery-barn-kids-charlie-play-kitchen-061517.jpg' , isFeatured: false, saleValue: 0, category: @category2,user: @admin)
@test2 = Product.create!(title: 'men\'s blazer', description: 'Men\s Blazer, comes in all sizes', price: '750', image: 'https://m.media-amazon.com/images/I/51InVIt3OIL._AC_UL1001_.jpg' , isFeatured: false, saleValue: 0, category: @category3,user: @admin)
@test3 = Product.create!(title: 'Mac Book Pro 13', description: 'With M1 chip, it is the fastest of its kind', price: '750', image: 'https://cdn.pixabay.com/photo/2015/01/14/18/41/home-office-599475_1280.jpg' , isFeatured: false, saleValue: 0, category: @category1,user: @admin)
@test4 = Product.create!(title: 'Apple iPad Pro Wi-Fi 128GB Space Grey', description: 'With M1, iPad Pro is the fastest device of its kind. It’s designed to take full advantage of next-level performance and custom technologies like the advanced image signal processor and unified memory architecture of M1. And with the incredible power efficiency of M1, iPad Pro is still thin and light with all-day battery life, making it as portable as it is powerful.', price: '850', image: 'https://cdn.pixabay.com/photo/2015/01/14/18/41/home-office-599475_1280.jpg' , isFeatured: false, saleValue: 0, category: @category1,user: @admin)
@test5 = Product.create!(title: 'Women\'s Nirvana 70 Pointed Toe Mary Jane Pump', description: '100% Leather, Imported, Leather sole, Shaft measures approximately not_applicable from arch,  Mary jane pump, 70mm heel, Handmade in Italy', price: '150', image: 'https://s3.r29static.com/bin/shop/a54/x,85/2224134/image.webp' , isFeatured: false, saleValue: 0, category: @category3,user: @admin)
@test6 = Product.create!(title: 'Personalized Canvas Tote Bag', description: 'hand made tote bag for all carrying needs', price: '50', image: 'https://www.scarymommy.com/wp-content/uploads/2021/08/26/Cotton-Tote-Bags-Arent-Eco-Friendly.jpg' , isFeatured: false, saleValue: 0, category: @category8,user: @admin)
@test7 = Product.create!(title: 'Dune by Frank Herbert', description: 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, who would become the mysterious man known as Maud\'dib. He would avenge the traitorous plot against his noble family - and would bring to fruition humankind\'s most ancient and unattainable dream.', price: '9.99', image: 'https://i.pinimg.com/originals/3f/37/fb/3f37fbc161a83e952dfc8f5103f36939.png' , isFeatured: false, saleValue: 0, category: @category5,user: @admin)
@test8 = Product.create!(title: 'Christmas Lights Outdoor 1000 LED 403ft', description: 'Super Long String Lights with 8 Modes & Timer, Plug in Twinkle Fairy Lights Decor for Home Xmas Wedding Party Room Yard Tree Holiday Decorations (Multicolor)', price: '55.99', image: 'https://m.media-amazon.com/images/I/91r49F8-dXL._AC_SL1500_.jpg' , isFeatured: false, saleValue: 0, category: @category6,user: @admin)
@test9 = Product.create!(title: 'LIFESTYLE SOLUTIONS Austin Sofas, 80.70" W x 31.10" D x 32.30" H,', description: 'COMFORTABLE COUCH: At Lifestyle Solutions, comfort is our top priority. This couch features high-density foam cushions on the seat and back to ensure maximum comfort. Get ready to relax on this sofa!', price: '350', image: 'https://m.media-amazon.com/images/I/81FYaptO51S._AC_SL1500_.jpg' , isFeatured: false, saleValue: 0, category: @category7,user: @admin)
@test10 = Product.create!(title: 'ESCAPE ROOM IN A BOX The Werewolf Experiment', description: 'Exciting cooperation game—everyone in the game is after the same goal: to escape! You have to solve 19 mental and physical puzzles before a mad scientist turns you into werewolves—and you have only an hour to do it!', price: '24.99', image: 'https://149455152.v2.pressablecdn.com/wp-content/uploads/2018/01/EscapeRoomBox-Werewolf-cover.jpg' , isFeatured: false, saleValue: 0, category: @category4,user: @admin)
@test11 = Product.create!(title: 'Halo 3', description: 'It is Halo, enough said, just buy it.', price: '9.99', image: 'https://www.mobygames.com/images/covers/l/591077-halo-3-xbox-360-reference-card.jpg' , isFeatured: false, saleValue: 0, category: @category4,user: @admin)
@test12 = Product.create!(title: 'Ridley\'s Sarcastic 9 Ball', description: 'Can you find a more hilarious twist on a classic? Duuuh! Ask your question, if you must, then turn the ball over for your answer. "Am I actually a good programmer?" - Probaby not if you are asking a 9 Ball for \'magical answers\'!', price: '14.99', image: 'https://stoysnetcdn.com/tgtg/tgtg_ho20_rid396/tgtg_ho20_rid396_3.jpg' , isFeatured: false, saleValue: 0, category: @category4,user: @admin)

puts "#{Product.count} products created"