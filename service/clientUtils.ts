import axios from 'axios';
import { getJwtToken } from './tokenService';

const apiURL = "http://192.168.8.152:8080";

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
