import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});


// instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// instance.defaults.headers.common['X-CSRF-TOKEN'];

// let token = document.head.querySelector('meta[name="csrf-token"]');

// if (token) {
//     instance.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }

export default instance;
