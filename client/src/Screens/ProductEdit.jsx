import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function ProductEdit(props) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category_id: 1,
    price: "",
    isFeatured: false,
    saleValue: 0,
    image: "",
  })
  const { title, description, image, category_id, price, isFeatured, saleValue } = formData;
  const { editProduct } = props;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (props.products) {
      const oneProduct = props.products.find(product => product.id === Number(id));
      const prefillFormData = () => {
        const { title, description, image, category_id, price, isFeatured, saleValue } =
        oneProduct;
        setFormData({
          title: title,
          description: description,
          category_id: category_id,
          price: price,
          isFeatured: isFeatured,
          saleValue: saleValue,
          image: image,
        });
      }
      prefillFormData()
    }
  }, [props.product])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <h3>Update Product</h3>
      <form onSubmit={(e) => {
        e.preventDefault();
        editProduct(id, formData);
      }}>
        <label>
          Photo Link:
            <input
            type="text"
            name="image"
            value={image}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product's Title:
            <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product's Description:
            <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product's Category:
            <input
            type="text"
            name="category_id"
            value={category_id}
            onChange={handleChange}
          />
        </label>
        <label>
          Product's Price:
            <input
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Featured:
            <input
            type="text"
            name="isFeatured"
            value={isFeatured}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product's Sale Percent:
            <input
            type="text"
            name="saleValue"
            value={saleValue}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
