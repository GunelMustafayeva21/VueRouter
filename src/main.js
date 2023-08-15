import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
Vue.use(VueRouter)

const router = new VueRouter({
  //Keyword : Our Variable
  routes:routes,
  //In history mode without # we can write url of single page app
  mode:'history',// Default mode is hash

  scrollBehavior(to, from, savedPosition){
    if(to.hash){
      return {
        selector:to.hash
      }
    }
  } 
})
//Route Controlig can happen in three places 
//Global- Main js
//Route Level - Routes
//Component Level- In export default of Component
//Global Route Controling
router.beforeEach((to, from, next)=>{
  //Sehifeye gire bilmeyende hara getmesini isteyirsense next daxilinde yaz 
  console.log("Global Route Controlling");
    next();
})
new Vue({
  el: '#app',
  //Keyword : Our Variable
  router:router,
  render: h => h(App)
})
