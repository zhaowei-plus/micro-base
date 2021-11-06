import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 主应用使用 BrowserRouter，而不是 HashRouter
export default new VueRouter({
    mode: 'history', // 主应用不能使用 hashHistory
})