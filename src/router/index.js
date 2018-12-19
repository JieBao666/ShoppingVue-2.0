import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Goods from '@/components/Goods'
import Good from '@/components/Good'
import Edit from '@/components/Edit'
import Map from '@/components/Map'
import auth from '@/auth'
import Auth from '@/components/Auth'
import Dashboard from '@/components/Dashborad'
import Video from '@/components/Video'
import Customers from '@/components/Customers'
import AboutUs from '@/components/AboutUs'
Vue.use(Router)
var routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/goods',
    name: 'Goods',
    component: Goods,
    meta: {requireAuth: true}
  },
  {
    path: '/good',
    name: 'Good',
    component: Good
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
    props: true
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth,
    meta: {guestOnly: true}
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {requireAuth: true}
  },
  {
    path: '/video',
    name: 'video',
    component: Video
  },
  {
    path: '/customers',
    name: 'customer',
    component: Customers,
    meta: {requireAuth: true}
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  }
]

export const router = new Router({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  let currentUser = auth.user()
  let requireAuth = to.matched.some(record => record.meta.requireAuth)
  let guestOnly = to.matched.some(record => record.meta.guestOnly)

  if (requireAuth && !currentUser) next('auth')
  else if (guestOnly && currentUser) next('dashboard')
  else next()
})
