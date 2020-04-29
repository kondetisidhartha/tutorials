import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-sid.firebaseio.com/'
});

export default instance;