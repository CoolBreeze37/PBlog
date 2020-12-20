import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('views/home/Home')
const repository = () => import('views/repository/Repository')
const reader = () => import('components/common/reader/Reader')
const friends = () => import('views/friends/Friends')
const album = () => import('views/album/Album')
const picture = () => import('views/album/childComponents/Picture')

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
    component: repository
  },
  {
    path: '/reader',
    component: reader
  },
  {
    path: '/friends',
    component: friends
  },
  {
    path: '/album',
    component: album,
  },
  {
    path: '/picture',
    component: picture
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
