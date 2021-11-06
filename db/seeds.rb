Product.destroy_all
Category.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')

puts "#{User.count} users created"

@category1 = Category.create!(title: 'electronics')
@category2 = Category.create!(title: 'appliances')
@category3 = Category.create!(title: 'apparel')

puts "#{Category.count} categories created"

@test1 = Product.create!(title: 'kitchen set', description: 'some description here, bla bla bla', price: '750', image: 'https://cdn.pixabay.com/photo/2015/01/14/18/41/home-office-599475_1280.jpg' , isFeatured: false, saleValue: 0, category: @category2,user: @admin)
@test2 = Product.create!(title: 'men\'s blazer', description: 'some description here, bla bla bla', price: '750', image: 'https://cdn.pixabay.com/photo/2015/01/14/18/41/home-office-599475_1280.jpg' , isFeatured: false, saleValue: 0, category: @category3,user: @admin)
@test3 = Product.create!(title: 'Mac Book Pro 13', description: 'some description here, bla bla bla', price: '750', image: 'https://cdn.pixabay.com/photo/2015/01/14/18/41/home-office-599475_1280.jpg' , isFeatured: false, saleValue: 0, category: @category1,user: @admin)

puts "#{Product.count} products created"