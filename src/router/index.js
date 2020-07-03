import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta:{
      layout: 'black',
      auth: true
    },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/brands',
    name: 'Brands',
    meta: {
      layout: 'white',
    },
    component: () => import('../views/Brands.vue')
  },
    {
      path: '/register',
      name: 'Register',
      meta: {
        layout: 'black',
      },
      component: () => import('../views/Register.vue')
    },
    {
      path: '/services',
      name: 'Services',
      meta: {
        layout: 'white',
      },
      component: () => import('../views/Services.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      meta: {
        layout: 'white',
      },
      component: () => import('../views/Cart.vue')
    }
    ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
