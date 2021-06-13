import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Works from '../views/Works.vue'
import ProductShowPage from '../views/ProductShowPage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/works', name: 'Works', component: Works },
  { path: '/products/:id', name: 'ProductShowPage', component: ProductShowPage },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
