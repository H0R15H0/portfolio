<template>
  <div id="app">
    <VApp>
      <Header/>
      <div style="height:54px;"></div>
      <router-view/>
    </VApp>
  </div>
</template>

<script>
import Header from "@/components/organisms/shared/Header"
export default {
  components: {
    Header,
  }
}
</script>

<style lang="scss">
#app {
  background-color: var(--v-primary-base);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  border-bottom: medium solid var(--v-accent-base);
}
</style>
