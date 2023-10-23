import axios from 'axios';
import BASE_API_URL from '../util/constant'

const BASE_URL = BASE_API_URL;

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

