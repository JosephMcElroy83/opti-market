import api from './api-config';

export const getAllCategories = async () => {
  const resp = await api.get('/categories');
  return resp.data;
};