import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 引入全局样式表
import '@/assets/css/global.css'
// 导入字体图标(用户、密码等)
import '@/assets/fonts/iconfont.css'
// 导入axios
import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 每个 Vue 组件都可以通过 this 访问到 $http，从而发起 ajax 请求
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
