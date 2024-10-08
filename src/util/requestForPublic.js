import axios from "axios";

export function requestForPublic(config) {
    const instance = axios.create({
        baseURL: 'https://public.tgmeng.com/public',
        // baseURL: 'http://127.0.0.1:18686/public',
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
