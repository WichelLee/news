// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import bread from './components/common/bread.vue'

Vue.use(ElementUI)
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
Vue.prototype.$http = axios
Vue.component(bread.name,bread)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>',
  render: h => h(App)
})
