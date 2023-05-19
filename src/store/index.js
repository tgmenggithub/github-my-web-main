import {createStore} from 'vuex'

export default createStore({
    state: {
        githubAccount: '',
        githubPassword: '',
        userSession: '',
        schoolId: '',
        schoolList: '',
        deviceCode: '',
        deviceToken: '',
        key: '',
        keyToken: '',
        // 是否认证，0表示未认证，1表示已认证,2表示用户名密码正确，到了输入验证码。用来判断页面上元素是否显示隐藏
        auth: 0,
        jetAuth: 0,
        activeServerList: '',
        // 认证的进度条
        percentage: 0,
        // TODO 区分是给com还是cn打包，com的话店铺和使用文档都在，cn的话只有使用文档
        agentUser : 'com',
        // agentUser : 'cn',
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})
