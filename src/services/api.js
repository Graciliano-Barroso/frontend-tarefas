import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // sua API NestJS
});

// Intercepta todas as requisições antes de serem enviadas
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // pega o token salvo
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // adiciona nos headers
  }
  return config;
});

export default api;
