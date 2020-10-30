import Vue from 'vue'
import VueRouter from 'vue-router'
// import axios from 'axios'
// import store from '../store'

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
  {
    path: '/detail/:postId',
    component: () => import('../views/Detail'),
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if(to.path == '/login' || to.path == '/register' || to.path == './mine') {
//     next();
//   } else {
//     axios.get('/api/users/info').then(res => {
//       if(res.data.code == 0) {
//         stroe.commit('SET_USERNAME',res.data.username);
//         next();
//       } else {
//         next('/login')
//       }
//     }).catch(err => {
//       next('/login')
//     })
//   }
// })


export default router
