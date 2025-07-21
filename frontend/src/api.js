import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        // Do not add Authorization header for register or login endpoints
        const isAuthEndpoint = 
            config.url.includes("/api/user/register/") || 
            config.url.includes("/api/token/");
        if (token && !isAuthEndpoint) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api;