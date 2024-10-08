import axios from "axios";

export function request(config) {
    const instance = axios.create({
        // baseURL: 'http://127.0.0.1:18544/github',
        baseURL: 'https://githubedu.com/github',
        timeout: 600000
    })

    // 添加请求拦截器
    instance.interceptors.request.use(function (config) {
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    return instance(config)
}
