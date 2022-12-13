import axios from 'axios';

const breakingBadApi = axios.create({
    //baseURL: 'https://www.breakingBadApi.com/api'
    baseURL: 'http://localhost:8000'
});

export default breakingBadApi;