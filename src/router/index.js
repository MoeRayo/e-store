import Vue from 'vue'
import VueRouter from 'vue-router'
import { authGuard } from "../auth/authGuard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/products',
    name: 'product',
    component: () => import('../views/productscards.vue')
  },
  {
    path: '/cart',
    name: 'checkout',
    component: () => import('../views/cart.vue')
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import('../views/Profile.vue'),
    beforeEnter: authGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
