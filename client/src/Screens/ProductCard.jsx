import { useHistory } from 'react-router-dom';

export default function ProductCard(props) {
  const { products, currentUser } = props;
  const history = useHistory();

  return (
    <div className="product-card">
      {products.map(product => (
        <div
          key={product.id}
          className="product-card"
          onClick={(e) => {
            history.push(`/${product.id}`);
            window.scrollTo(0, 0);
          }}>
          <img
            alt={product.title}
            src={product.image}
            // onError={(e) => {
            //   e.target.onerror = null;
            //   e.target.src = 'https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png'
            // }}
          />
          <h3>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.isFeatured}</p>
            <p>{product.saleValue}</p>
          </h3>
        </div>
      ))}
      {currentUser && (
        <div
          className="product-card"
          onClick={() => {
            history.push('/new');
            window.scrollTo(0, 0);
          }}>
          <img
            alt="Create a new product"
            src="https://image.flaticon.com/icons/png/512/14/14980.png"
            className="plus-sign"
          />
          <h3>Create a new product</h3>
        </div>
      )}
    </div>
  )
}