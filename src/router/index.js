import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/datos',
    name: 'datos',
    component: () => import(/*webpackChunkName: "datos */ '../components/ListaTareas.vue')

  },

  {
    path: '/resultado',
    name: 'resultado',
    component: () => import(/*webpackChunkName: "resultado */ '../views/Results.vue')

  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
