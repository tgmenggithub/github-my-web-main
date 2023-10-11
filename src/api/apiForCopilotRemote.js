import {requestForCopilotRemote} from '@/util/requestForCopilotRemote.js'

export function keyRecord(data) {
    return requestForCopilotRemote({
        url: '/keyRecord',
        method: 'post',
        data: data
    })
}

