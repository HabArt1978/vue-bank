import OrdersView from '@/views/OrdersView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Orders',
      component: OrdersView
    },
    {
      path: '/help',
      name: 'Help',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HelpView.vue')
    },
    {
      path: '/messages',
      name: 'Messages',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MessagesView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LogInView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

export default router
