import React from 'react'

export default function ProductCategory(props) {
  const { categories, setCategory } = props

  const handleCategory = (cat) => {
    setCategory(cat)
  }

  return (
    <div className="category-container">
      Category
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
        <div className="category-card" onClick={() => handleCategory(null)}>
          All Products
        </div>
      </div>
    </div>
  )
}
