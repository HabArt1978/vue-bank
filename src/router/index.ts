import { useLogInStore } from '@/stores/index'
import type {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw
} from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Orders',
    component: () => import('../views/OrdersView.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/HelpView.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/messages',
    name: 'Messages',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/MessagesView.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LogInView.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterView.vue'),
    meta: {
      auth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes
})

router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const { isAuthenticated } = useLogInStore()
    const requireAuth = to.meta.auth

    if (requireAuth && isAuthenticated) {
      next()
    } else if (requireAuth && !isAuthenticated) {
      next({ name: 'Login' })
    } else {
      next()
    }
  }
)

export default router
