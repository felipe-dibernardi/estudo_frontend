import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Clients from '@/views/Clients'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients
    }
  ]
})
