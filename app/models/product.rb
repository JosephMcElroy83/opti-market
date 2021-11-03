class Product < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_one :categories
end
