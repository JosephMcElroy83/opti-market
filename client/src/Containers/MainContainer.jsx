import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';
import ProductCard from '../Screens/ProductCard';
import ProductCreate from '../Screens/ProductCreate';
import ProductCardDetail from '../Screens/ProductCardDetail';
import { readAllProducts, createProduct, updateProduct, destroyProduct } from '../Services/products.js';
import ProductEdit from '../Screens/ProductEdit';

export default function MainContainer(props) {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await readAllProducts();
      setProducts(products);
    }
    fetchProducts();
    // const reloadMe = (reloader) => {!reloader} COME BACK TO RELOAD PAGE
  }, [])

  const newProduct = async (formData) => {
    const newProduct = await createProduct(formData);
    setProducts(prevState => [...prevState, newProduct]);
    history.push('/');
  }

  const editProduct = async (id, formData) => {
    const updatedProduct = await updateProduct(Number(id), formData);
    setProducts(prevState => prevState.map(product => {
      return product.id === Number(id) ? updatedProduct : product
    }))
    history.push(`/${id}`);
  }

  const deleteProduct = async (id) => {
    await destroyProduct(id);
    setProducts(prevState => prevState.filter(product => {
      return product.id !== id
    }))
    history.push('/');
  }

  return (
    <Switch>
      <Route path='/new'>
        <ProductCreate
          newProduct={newProduct}
        />
      </Route>
      <Route path='/:id/edit'>
        <ProductEdit
          products={products}
          editProduct={editProduct}
        />
      </Route>
      <Route path='/:id'>
        <ProductCardDetail
          deleteProduct={deleteProduct}
          currentUser={currentUser}
          editProduct={editProduct}
          products={products}
        />
      </Route>
      <Route path='/'>
        <ProductCard
          currentUser={currentUser}
          products={products}
        />
      </Route>
    </Switch>
  )
}
