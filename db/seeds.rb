@admin = User.create!(username: 'joe', email: 'joe@email.com', password: '123456')

puts "#{User.count} users created"

@category1 = Category.create!(title: 'electronics')

@product1 = Product.create!(title: 'Mac Book Pro 13', description: 'some description here, bla bla bla', price: '750', image: 'https://cdn.pixabay.com/photo/2015/01/14/18/41/home-office-599475_1280.jpg' , isFeatured: false, saleValue: 0, category: @category1,user: @admin)