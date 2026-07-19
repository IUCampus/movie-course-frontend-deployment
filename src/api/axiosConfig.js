import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://movie-course-backend-deployment.onrender.com';
const baseURL = API_BASE_URL.endsWith('/') ? API_BASE_URL : `${API_BASE_URL}/`;

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
