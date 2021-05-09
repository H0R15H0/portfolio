<template>
  <header>
    <VAppBar app elevate-on-scroll color="primary">
      <VToolbarTitle>
        <VBtn @click="moveToTop()" x-large depressed color="primary black--text">Horisho</VBtn>
      </VToolbarTitle>

      <VSpacer></VSpacer>

      <VToolbarItems>
        <VBtn v-for="item in items" :key="item.title" :href="item.route" depressed color="primary black--text" x-small>
        {{ item.title }}
        </VBtn>
      </VToolbarItems>

    </VAppBar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "About", route: "/#about"},
        { title: "Skills", route: "/#skills"},
        { title: "Products", route: "/#products"},
        // { title: "Posts", route: "/#posts"},
      ],
    }
  },
  methods: {
    moveToTop() {
      this.$router.push({name: 'Home'}, () => {})
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  z-index: 10;
}
</style>