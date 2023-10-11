import axios from "axios";

export function requestForCopilotRemote(config) {
    const instance = axios.create({
        baseURL: 'http://121.5.131.183:18686/copilotremote',
        // baseURL: 'http://127.0.0.1:18686/copilotremote',
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
