import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotificationsView from '@/views/NotificationsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'notifications',
      component: NotificationsView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
