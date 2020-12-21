import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '../views/Goods.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import Orders from '../views/Orders.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '*',
    name: 'Goods',
    component: Goods
  }
]

const router = new VueRouter({
  routes
})

export default router
