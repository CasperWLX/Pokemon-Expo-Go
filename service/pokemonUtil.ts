import axios from 'axios'

const apiURL = "http://192.168.8.152:8080/database/v2";

const pokemonUtil = axios.create({
    baseURL: apiURL,
    withCredentials: true,
})

pokemonUtil.interceptors.request.use(
    (config) => {
      // Example: Add Authorization header if token exists
      const token = ""; // Replace with logic to get your JWT token (if using cookies, it might not be needed here)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  export default pokemonUtil;