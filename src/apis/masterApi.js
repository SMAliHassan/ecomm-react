import axios from 'axios';

// For DEVELOPMENT
// export default axios.create({
//   baseURL: 'http://127.0.0.1:8000/api/v1',
//   timeout: 30_000,
//   withCredentials: true,
// });

// For PRODUCTION
export default axios.create({
  baseURL: '/api/v1',
  timeout: 30_000,
});
