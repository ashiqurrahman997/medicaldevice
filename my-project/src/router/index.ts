import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Pages/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Pages/Home.vue')
   
  },
  {
    path: '/api/login',
    name: 'login',
    component: () => import('../views/Pages/Home.vue')
  },

  {
    path: '/api/devicetype',   
    component: () => import ("../views/Pages/DeviceType.vue")
  } ,
  {
    path: '/api/overview/modeltype',
    name: 'modeltype', 
    
    component: () => import ("../views/Pages/ModelType.vue"),
    
  } 
  ,{
    path: '/api/overview/modeldata',
    name: 'modeldata',   
    component: () => import( "../views/Pages/ModelData.vue"),
  
  }
  ,{
    path: '/api/devicemodel', 
    name: 'devicemodel_add',   
    component: () => import( "../views/Pages/DeviceModelAdd.vue")
  }
]

const router = new VueRouter({
  mode:"history",
  base: process.env.BASE_URL,
  routes
})

export default router
