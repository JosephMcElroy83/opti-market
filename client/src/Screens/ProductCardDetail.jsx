import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styling/ProductCardDetail.css'

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
          <div className="product-container">
            <div className="image-title-description">
              <img
                style={{ width: "40vw"}}
                className="prod-image"
                alt={product.title}
                src={product.image}
                onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png'
              }}
              />
              <div className="title-description-div">
                  <h2>Title: {product.title}</h2>
                  <h2>Description: {product.description}</h2>
              </div>
            </div>
              <div className="information-container">
                <h2>Category: {product.category.title}</h2>
                <h2>Price ${product.price}</h2>
              {product.saleValue !== 0 ? <h2>Sale: {product.saleValue}%</h2> : <p></p>}
            </div>
            <hr />
            {(props.currentUser?.id === product.user_id) && 
              <div className="edit-link">
              <Link className="edit-btn" to={`/${id}/edit`}>
                Edit
              </Link>
              <button className="delete-btn" onClick={() => deleteProduct(id)}>
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
