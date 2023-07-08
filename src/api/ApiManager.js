import axios from 'axios';

// untuk laravel localhost: php artisan serve--host 192.168.1.3  --port 8000
const ApiManager = axios.create({
    baseURL: 'https://reqres.in/api/users?page=1',
    responseType: 'json',
    withCredentials: true,
    delayed:true,
});

ApiManager.interceptors.request.use((config) => {
    if (config.delayed) {
        return new Promise(resolve => setTimeout(() => resolve(config), 100));
    }
    return config;
});


export default ApiManager;