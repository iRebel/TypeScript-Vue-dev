
/**
 * main.js是入口文件，主要作用是初始化vue实例，并引入所需要的插件
 * App.vue 仅是一个组件，只不过是一个主组件
*/

import { createApp } from 'vue'

import store from 'src/store'
import router from 'src/router'

import App from './App.vue'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
