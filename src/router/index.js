import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import ProductShowPage from '../views/ProductShowPage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products/:id', name: 'ProductShowPage', component: ProductShowPage },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
