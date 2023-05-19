import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// Prism
import Prism from 'prismjs';
// 代码高亮
import 'prismjs/components/prism-json';
// 行号
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';

import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import * as echarts from 'echarts';

axios.defaults.headers.post['Content-Type'] = 'application/json'

// 选择使用主题
VMdPreview.use(vuepressTheme, {
    Prism,
});
// markdown支持显示代码行数
VMdPreview.use(createLineNumbertPlugin())

const app = createApp(App)
app.use(ElementPlus)
app.use(VueAxios, axios)
app.use(VMdPreview)
app.use(store)
app.use(router)
app.config.globalProperties.echarts = echarts
app.mount('#app')


