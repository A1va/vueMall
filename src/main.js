import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入Element
import '@/plugins/element.js'
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

// 消息提示的环境配置，是否为⽣产环境：
// false 开发环境：Vue会提供很多警告来⽅便调试代码。
// true ⽣产环境：警告却没有⽤，反⽽会增加应⽤的体积
// process.env.NODE_ENV 如果是开发环境值为 development,⽣产环境是production
// 如果采⽤npm run serve 的是开发环境，npm run build 是⽣产环境
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
