import Vue from 'vue'
import VueRouter from 'vue-router'
import Table from '../views/Table.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:Table  
  }
]

const router = new VueRouter({
  routes
})

export default router
