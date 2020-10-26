import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    component: () => import('../views/Register')
  },
  {
    path: '/home',
    component: () => import('../views/Home')
  },
  {
    path: '/group',
    component: () => import('../views/Group')
  },
  {
    path: '/shopcart',
    component: () => import('../views/ShopCart')
  },
  {
    path: '/mine',
    component: () => import('../views/Mine')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
