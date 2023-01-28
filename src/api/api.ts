import axios, { AxiosInstance } from 'axios';

const axiosParams = {
    baseURL: import.meta.env.VITE_API_BASE_URL as string
};

const axiosInstance = axios.create(axiosParams);

const api = (axios: AxiosInstance) => {
    return {
        get: (url: string, config: Record<string, any>) => axios.get(url, config),
        post: (url: string, body: Record<string, any>, config: Record<string, any>) => axios.post(url, body, config),
        patch: (url: string, body: Record<string, any>, config: Record<string, any>) => axios.patch(url, body, config),
        delete: (url: string, config: Record<string, any>) => axios.delete(url, config),
    };
};
// Initialise the api function and pass axiosInstance to it
export default api(axiosInstance);