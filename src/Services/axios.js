import axios from 'axios';

const baseURL = process.env.REACT_APP_QUESTION_API_BASE_URL;
console.log("QUESTION_API_BASE_URL",baseURL);

const headers = {};
headers.Authorization = `Bearer xxxx`;  

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: headers,
});

export default axiosInstance;