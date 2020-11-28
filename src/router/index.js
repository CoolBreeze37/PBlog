import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('views/Home')
const Repository = () => import('views/Repository')

Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/repository',
    component: Repository
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
