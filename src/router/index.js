import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/pages/Home.vue'
import About from '@/components/pages/About.vue'
import Experiences from '@/components/pages/Experiences.vue'
import Skills from '@/components/pages/Skills.vue'
import Works from '@/components/pages/Works.vue'
import Contact from '@/components/pages/Contact.vue'
import ProductShowPage from '@/components/pages/ProductShowPage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/experiences', name: 'Experiences', component: Experiences },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/works', name: 'Works', component: Works },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/products/:id', name: 'ProductShowPage', component: ProductShowPage },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
