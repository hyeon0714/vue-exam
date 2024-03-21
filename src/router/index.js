import { createRouter, createWebHistory } from 'vue-router'
import ex01 from '../views/Ex01View.vue'
import ex02 from '../views/Ex02View.vue'
import ex03 from '../views/Ex03View.vue'
import ex04 from '../views/Ex04View.vue'
import ex05 from '../views/Ex05View.vue'
import ex06 from '../views/Ex06View.vue'
import ex07 from '../views/Ex07View.vue'
import ex08 from '../views/Ex08View.vue'
import ex09 from '../views/Ex09View.vue'

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
  },
  {
    path: '/3',
    name: 'ex03',
    component: ex03
  },
  {
    path: '/4',
    name: 'ex04',
    component: ex04
  },
  {
    path: '/5',
    name: 'ex05',
    component: ex05
  },
  {
    path: '/6',
    name: 'ex06',
    component: ex06
  },
  {
    path: '/7',
    name: 'ex07',
    component: ex07
  },
  {
    path: '/8',
    name: 'ex08',
    component: ex08
  },
  {
    path: '/9',
    name: 'ex0',
    component: ex09
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
