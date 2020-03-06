import Vue from 'vue'
import VueRouter from 'vue-router'
import minthearder from '../components/xz/Login'
import home from '../components/xz/Home'
import product from '../components/xz/product'
import cart from '../components/xz/common/cart'
Vue.use(VueRouter)

const routes = [
  {path:'/cart',component:cart},
  {
    path:'/',component:minthearder
  },
  {path:'/home',component:home},
  {path:'/product',component:product}
]

const router = new VueRouter({
  routes
})

export default router
