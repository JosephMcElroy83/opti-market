import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProductCardDetail(props) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { products, deleteProduct } = props;

  useEffect(() => {
    if (products.length) {
      const oneProduct = products.find(product => product.id === Number(id));
      setProduct(oneProduct)
    }
  }, [products, id])

  return (
    <div className="product-page">
      {
        product ? (
          <div>
            <img
              alt={product.title}
              src={product.image}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png'
              }}
            />
            <div>
                <h2>{product.title}</h2>
                <h2>{product.description}</h2>
                <h2>{product.category.title}</h2>
                <h2>{product.price}</h2>
                <h2>{product.isFeatured}</h2>
                <h2>{product.saleValue}</h2>
            </div>
            {(props.currentUser?.id === product.user_id) && 
            <div>
              <Link to={`/${id}/edit`}>
                Edit
              </Link>
              <button onClick={() => deleteProduct(id)}>
                Delete
              </button>
             </div>
            }
           
          </div>
        ) : <h2>Loading . . .</h2>
      }
    </div>
  )
}
