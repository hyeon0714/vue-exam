import { createRouter, createWebHistory } from 'vue-router'
import ex01 from '../views/Ex01View.vue'
import ex02 from '../views/Ex02View.vue'

const routes = [
  {
    path: '/1',
    name: 'ex01',
    component: ex01
  },
  {
    path: '/2',
    name: 'ex02',
    component: ex02
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
