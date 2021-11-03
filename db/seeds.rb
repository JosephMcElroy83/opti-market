@admin = User.create!(username: 'joe', email: 'joe@email.com', password: '123456')

puts "#{User.count} users created"
