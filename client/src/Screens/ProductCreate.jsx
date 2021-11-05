import { useState } from 'react';

export default function ProductCreate(props) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category_id: 1,
    price: "",
    isFeatured: false,
    saleValue: 0,
    image: "",
  });
  const { title, description, price, image, category_id, isFeatured, saleValue } = formData;
  const { newProduct } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        newProduct(formData);
      }}
    >
      <h1>Create Product</h1>
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
  );
}
