import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Connexion from '../views/Connexion.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/connexion',
    name: 'RegisterLogin',
    component: Connexion
  },
  {
    path: '/login',
    name: 'Thetest',
    component: Login
  },
  {
    path: '/register',
    name: 'Thetest2',
    component: Register
  },
]

const router = new VueRouter({
  /*mode :'history'*/
  routes
})

export default router
