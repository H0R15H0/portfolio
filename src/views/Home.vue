<template>
  <VContainer>
    <About id="about" class="header-space"/>
    <Skills id="skills" class="header-space"/>
    <Products id="products" class="header-space"/>
    <Posts id="posts" class="header-space"/>
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

<style scoped>
  .header-space {
    padding-top: 64px;
  }
</style>
