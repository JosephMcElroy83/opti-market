import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
  const { editProduct, categories } = props;
  const { id } = useParams();

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
    //eslint-disable-next-line
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
            autoFocus
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
        <select onChange={handleChange} name="category_id" value={category_id}>
          {categories.map((cat) => (
            <option value={cat.id}>{cat.title}</option>
          ))}
        </select>
        <label>
          Product's Price:
            <input
            type="number"
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
            type="number"
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
