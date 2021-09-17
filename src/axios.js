import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-blog-c7e11-default-rtdb.firebaseio.com/'
});

export default instance;
