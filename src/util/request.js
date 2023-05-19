import axios from "axios";
import {ElNotification} from "element-plus";

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

    window.addEventListener('error', function (event) {
        if (event.message.indexOf('net::ERR_FAILED') == 567) {
            // 处理 net::ERR_FAILED 错误
            // 例如展示错误提示框、重试请求等等
            ElNotification.closeAll()
            ElNotification({
                title: 'Warning',
                message: "GitHub官方服务器流量过大，请稍后重试",
                type: 'warning',
                duration: 0,
                dangerouslyUseHTMLString: true
            })
        } else if (event.message.indexOf('net::ERR_FAILED') == 456) {
            // 处理 net::ERR_FAILED 错误
            // 例如展示错误提示框、重试请求等等
            ElNotification.closeAll()
            ElNotification({
                title: 'Warning',
                message: "您每秒的请求数超过阈值，超过的请求已被服务器拒绝",
                type: 'warning',
                duration: 0,
                dangerouslyUseHTMLString: true
            })
        }
    })

    instance.interceptors.response.use(function (response) {
        console.log(response.data.message)
        const responseCode = response.data.code
        const responseMessage = response.data.message
        if (responseCode === 200) {
            ElNotification.closeAll()
            ElNotification({
                title: 'Success',
                message: responseMessage,
                type: 'success',
                duration: 0,
                dangerouslyUseHTMLString: true
            })
        } else if (responseCode === 201) {
            ElNotification.closeAll()
            ElNotification({
                title: 'Warning',
                message: responseMessage,
                type: 'warning',
                duration: 0,
                dangerouslyUseHTMLString: true
            })
        } else if (responseCode === 456) {
            ElNotification.closeAll()
            ElNotification({
                title: 'Warning',
                message: "您每秒的请求数超过阈值，超过的请求已被服务器拒绝",
                type: 'warning',
                duration: 0,
                dangerouslyUseHTMLString: true
            })
        } else if (responseCode === 567) {
            ElNotification.closeAll()
            ElNotification({
                title: 'Warning',
                message: "GitHub官方服务器流量过大，请稍后重试",
                type: 'warning',
                duration: 0,
                dangerouslyUseHTMLString: true
            })
        } else if (response) {
            ElNotification.closeAll()
            ElNotification({
                title: 'Warning',
                message: responseMessage,
                type: 'warning',
                duration: 0,
                dangerouslyUseHTMLString: true
            })
        }
        return response;
    }, function (error) {
        ElNotification.closeAll()
        if (error.response) {
            // 处理服务器返回的错误
            ElNotification.closeAll()
            ElNotification({
                title: 'Warning',
                message: error.message,
                type: 'warning',
                duration: 0,
                dangerouslyUseHTMLString: true
            })
        } else if (error.request) {
            // 处理网络错误
            ElNotification.closeAll()
            ElNotification({
                title: 'Warning',
                message: '网络错误，请检查网络连接。如果打开了代理，请关闭代理后重试。因为部分代理由于质量问题，会在请求过程中出现网络波动导致请求中断',
                type: 'warning',
                duration: 0,
                dangerouslyUseHTMLString: true
            })
        } else {
            // 处理请求错误
            ElNotification.closeAll()
            ElNotification({
                title: 'Warning',
                message: error.message,
                type: 'warning',
                duration: 0,
                dangerouslyUseHTMLString: true
            })
        }
        return Promise.reject(error);
    });

    return instance(config)
}
