import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://movie-course-backend-deployment.onrender.com',
});

export default axiosInstance;
