import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
      "Content-Type": "application/json",
    }
});

// Add a request interceptor
api.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
api.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default api;