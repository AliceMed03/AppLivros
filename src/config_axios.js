import axios from 'axios';

//criar uma instancia Axios com a URL do backend
//baseURL é a porta que esta rodando o backend
export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

