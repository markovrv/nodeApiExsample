import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '../views/Goods.vue'
import Cart from '../views/Cart.vue'
import Admin from '../views/Admin.vue'
import Orders from '../views/Orders.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Goods',
    component: Goods
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  }
]

const router = new VueRouter({
  routes
})

export default router
