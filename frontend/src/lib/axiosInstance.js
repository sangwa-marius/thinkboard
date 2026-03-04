import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:4500/api"
});

export default api;