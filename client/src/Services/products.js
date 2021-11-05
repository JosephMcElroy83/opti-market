import api from './api-config';

export const createProduct = async (data) => {
  const resp = await api.post('/products', { product: data })
  return resp.data
}

export const readAllProducts = async () => {
  const resp = await api.get('/products')
  return resp.data
}

export const readOneProduct = async (id) => {
  const resp = await api.get(`/products/${id}`);
  return resp.data
}

export const updateProduct = async (id, data) => {
  const resp = await api.put(`/products/${id}`, { product: data })
  return resp.data
}

export const destroyProduct = async (id) => {
  const resp = await api.delete(`/products/${id}`)
  return resp.data
}
