import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosJWT = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },

});

export const axiosImg = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'multipart/form-data'},
    
});