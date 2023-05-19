import {request} from '@/util/request.js'

export function schoolListAPI(data) {
    return request({
        url: '/school',
        method: 'post',
        data: data
    })
}

export function authKeyAPI(data) {
    return request({
        url: '/key/auth',
        method: 'post',
        data: data
    })
}

export function keyAPI(data) {
    return request({
        url: '/key',
        method: 'post',
        data: data
    })
}

export function recordKeyAPI(data) {
    return request({
        url: '/key/record',
        method: 'post',
        data: data
    })
}

export function bannedAPI(data) {
    return request({
        url: '/key/banned',
        method: 'post',
        data: data
    })
}

export function authAccountAPI(data) {
    return request({
        url: '/submit',
        method: 'post',
        data: data
    })
}

export function keyUsedSuccessAndError(data) {
    return request({
        url: '/key/successanderror',
        method: 'post',
        data: data
    })
}

export function verifiedCodeAPI(data) {
    return request({
        url: '/verified',
        method: 'post',
        data: data
    })
}

export function jetbrainsKeyAuthAPI(data) {
    return request({
        url: '/jetbrains/auth',
        method: 'post',
        data: data
    })
}

