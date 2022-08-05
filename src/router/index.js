import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/datos',
    name: 'datos',
    component: () => import('../components/ListaTareas.vue')

  },

  {
    path: '/resultado',
    name: 'resultado',
    component: () => import( '../views/Results.vue')

  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
