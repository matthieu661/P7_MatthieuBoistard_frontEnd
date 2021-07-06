import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Connexion from '../views/Connexion.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Wall from '../views/Wall.vue'
import Post from '../views/Post.vue'
import GetOneUser from '../views/AccountView.vue'
import PostCreatePost from '../views/CreatePost.vue'
import CommentCreateComment from '../views/CreateComment.vue'
import ModifyUserView from '../views/ModifyUserView.vue'
import ModifyPostView from '../views/ModifyPostView.vue'
import ModifyCommentView from '../views/ModifyCommentView'

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
  {
    path: '/wall',
    name: 'Thetest3',
    component: Wall
  },
  {
    path: '/post/:id',
    name :'OnePost',
    component : Post
  },
  {
    path: '/account/:id',
    name :'OneUser',
    component : GetOneUser
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
    path: '/account/:id/modifyUser',
    name :'modifyUserComponent',
    component : ModifyUserView
  },
  {
    path: '/post/modifyPost/:id',
    name :'modifyPostComponent',
    component : ModifyPostView
  },
  {
    path: '/post/&:id&/modifyComment/:id',
    name :'modifyCommentComponent',
    component : ModifyCommentView
  },

]

const router = new VueRouter({
  mode :'history',
  routes
})

export default router
