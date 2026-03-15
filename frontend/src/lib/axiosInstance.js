import axios from 'axios';

const api = axios.create({
    baseURL: "https://thinkboard-6m0k.onrender.com/"
});

export default api;