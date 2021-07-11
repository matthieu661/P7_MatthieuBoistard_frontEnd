import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// route Users
import Connexion from '../views/User-Connexion_View.vue'
import Login from '../views/User-Login_View.vue'
import Register from '../views/User-Register_View.vue'
import GetUserAccount from '../views/User-Account_View.vue'
import ModifyUserAccount from '../views/User-Modify_View.vue'

// routes Posts
import WallPage from '../views/Post-Wall_View.vue'
import Post from '../views/Post-GetOne_View.vue'
import ModifyPostView from '../views/Post-Modify_View.vue'
import PostCreatePost from '../views/Post-Create_View.vue'

// route comments
import CommentCreateComment from '../views/Comment-Create_View.vue'
import ModifyCommentView from '../views/Comment-Modify_View'

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
  // User account 
  {
    path: '/connexion',
    name: 'RegisterLogin',
    component: Connexion
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/account/:id',
    name :'GetUserAcccount',
    component : GetUserAccount
  },
  {
    path: '/account/:id/modifyUser',
    name :'ModifyUserAccount',
    component : ModifyUserAccount
  },


  // Post
  {
    path: '/wall',
    name: 'GetWallPage',
    component: WallPage
  },
  {
    path: '/post/:id',
    name :'OnePost',
    component : Post
  },
  
  {
    path: '/newPost',
    name :'CreatePost',
    component : PostCreatePost
  },
  {
    path: '/post/newComment/:id',
    name :'CreateComment',
    component : CommentCreateComment
  },
  
  {
    path: '/post/modifyPost/:id',
    name :'modifyPostComponent',
    component : ModifyPostView
  },
  {
    path: '/post/&:id&/modifyComment/:num',
    name :'modifyCommentComponent',
    component : ModifyCommentView
  },

]

const router = new VueRouter({
  mode :'history',
  routes
})

export default router
