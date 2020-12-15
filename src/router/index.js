import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('views/home/Home')
const Repository = () => import('views/repository/Repository')
const reader = () => import('components/common/reader/Reader')
const friends = () => import('views/friends/Friends')

Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home,
  },
  {
    path: '/repository',
    component: Repository
  },
  {
    path: '/reader',
    component: reader
  },
  {
    path: '/friends',
    component: friends
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
