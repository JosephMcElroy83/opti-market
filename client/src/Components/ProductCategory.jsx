import React from 'react'
import '../styling/ProductCategory.css'

export default function ProductCategory(props) {
  const { categories, setCategory } = props

  const handleCategory = (cat) => {
    setCategory(cat)
  }

  return (
    <div className="category-container">
      <p className="category-title">Category</p>
        <div className="category-card" onClick={() => handleCategory(null)}>
          All Products
        </div>
      <div className="category-map">
        {categories.map(categoryItem => (
          <div
            key={categoryItem.id}
            className="category-card"
            onClick={() => handleCategory(categoryItem.id)}
          >
            {categoryItem.title}
          </div>
        ))}
      </div>
    </div>
  )
}
