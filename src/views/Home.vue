<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <About id="about"/>
        <!-- <Skills id="skills"/> -->
        <Products id="products"/>
        <!-- <Posts id="posts"/> -->
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
import About from '@/components/About'
// import Skills from '@/components/Skills'
import Products from '@/components/Products'
// import Posts from '@/components/Posts'

export default {
  name: 'Home',
  components: {
    About,
    // Skills,
    Products,
    // Posts,
  }
}
</script>

<style scoped>
</style>
