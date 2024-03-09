import {requestForPublic} from '@/util/requestForPublic.js'

export function keyRecord(data) {
    return requestForPublic({
        url: '/copilotRemote/keyRecord',
        method: 'post',
        data: data
    })
}

export function gitHubUserInfo(data) {
    return requestForPublic({
        url: '/gitHub/userInfo',
        method: 'post',
        data: data
    })
}

export function checkCopilotToken(data) {
    return requestForPublic({
        url: '/copilotToken/check',
        method: 'post',
        data: data
    })
}