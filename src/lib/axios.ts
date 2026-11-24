import axios from 'axios';

export const api = import.meta.env.VITE_API_URL;
export const weddingApi = axios.create({ baseURL: api });
