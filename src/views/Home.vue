<template>
  <VContainer>
    <About id="about" />
    <Skills id="skills" />
    <Products id="products" />
    <Posts id="posts" />
  </VContainer>
</template>

<script>
import About from '@/components/About'
import Skills from '@/components/Skills'
import Products from '@/components/Products'
import Posts from '@/components/Posts'

export default {
  name: 'Home',
  components: {
    About,
    Skills,
    Products,
    Posts,
  }
}
</script>
