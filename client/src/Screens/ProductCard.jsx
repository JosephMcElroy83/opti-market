import { useHistory } from 'react-router-dom';
import '../styling/ProductCard.css'

export default function ProductCard(props) {
  const { products, category, currentUser } = props;
  const history = useHistory();

  const filterFn = (prod) => {
    if (!category) return true
    return prod.category_id === Number(category)
  }

  return (
    <div className="product-card-container">
      {products.filter(filterFn).map(product => (
      <div className="product-card-border">
        <div
          key={product.id}
          className="product-card"
          onClick={(e) => {
            history.push(`/${product.id}`);
            window.scrollTo(0, 0);
          }}>
          <img
            className="card-image"
            alt={product.title}
            src={product.image}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png'
            }}
            />
            <h3>
              <div className="title-category">
                <p>Title: {product.title}</p>
                <p>Cateogry: {product.category.title}</p>
              </div>
              <hr />
              <div className="price-sale">
              <p>Price: ${product.price}</p>
              {product.saleValue !== 0 ? <p>Sale: {product.saleValue}%</p> : <p></p>}
            </div>
          </h3>
        </div>
      </div>
      ))}
      {currentUser && (
        <div className="product-card-border">
          <div
            className="product-card"
            onClick={() => {
              history.push('/new');
              window.scrollTo(0, 0);
            }}>
          <img
            className="plus-image"
            alt="Create a new product"
            src="https://image.flaticon.com/icons/png/512/14/14980.png"
          />
          <h3 className="add-product">Create a new product</h3>
          </div>
        </div>
          
      )}
    </div>
  )
}