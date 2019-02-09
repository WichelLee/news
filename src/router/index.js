import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login.vue'
import mains from '../components/mains.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {name:'login',path:'/login',component:login},
    {name:'mains',path:'/mains',component:mains},

  ]
})
