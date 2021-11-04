@admin = User.create!(username: 'joe', email: 'joe@email.com', password: '123456')

puts "#{User.count} users created"

@category1 = Category.create!(title: 'electronics')

@product1 = Product.create!(title: 'Mac Book Pro 13', description: 'some description here, bla bla bla', price: '750', isFeatured: false, saleValue: 0, category: @category1,user: @admin)