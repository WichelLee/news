import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login.vue'
import mains from '../components/mains.vue'
import users from '../components/various/users.vue'
import goods from '../components/various/goods.vue'
import maps from '../components/various/maps.vue'
import newgoods from '../components/various/newgoods.vue'

Vue.use(Router)

var router = new Router({
  routes: [
    {name:'login',path:'/login',component:login},
    {name:'mains',path:'/mains',component:mains,
      children:[
        {name:'users',path:'/users',component:users},
        {name:'goods',path:'/goods',component:goods},
        {name:'maps',path:'/maps',component:maps},
        {name:'newgoods',path:'/newgoods',component:newgoods},
        
      ]},
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  if (to.path != '/login') {
    if (!localStorage['token']) {
      this.message.error('请先登录');
      this.$router.push('/login');
    } else {
      next();
    }
  } else {
    next();
  }

})
export default router
