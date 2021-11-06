import Vue from 'vue'
import router from './router'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './registerApps'

Vue.use(ElementUI)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

/*** 主应用和子应用，如何隔离：
 * 
 * 1. 规范实现：强制添加前缀
 * 2. CSS Module
 * 3. Shadow DOM，但是对于全局样式新增会有问题
  */