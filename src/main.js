/*
 * @Author: yuguangzhou
 * @Date: 2022-01-19 11:29:41
 * @LastEditTime: 2022-01-27 15:48:10
 * @LastEditors: yuguangzhou
 * @Description: 
 */


import { createApp } from 'vue'
import App from './App.vue'

import  tracer from '../packages/index.js'
import router from './router'


import '@/assets/styles/reset.less'
import  './assets/styles/doc.less'
import Prism from 'prismjs';
import './assets/styles/prism.css';
import Preview from '@/components/Preview.vue'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'
const app=createApp(App)
app.component('Preview', Preview)
app.use(router).use(tracer).use(VueClipboard).mount('#app')
