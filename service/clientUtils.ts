import axios from 'axios';
import { getJwtToken } from './tokenService';

const apiURL = "https://poke-guess-latest.onrender.com";

const clientUtils = axios.create({
    baseURL: apiURL,
});

clientUtils.interceptors.request.use(
    async(config) => {

        const token = await getJwtToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default clientUtils;
