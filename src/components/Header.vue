<template>
  <header>
    <VAppBar app flat color="primary">
      <div v-if="$vuetify.breakpoint.xs">
        <VAppBarNavIcon @click.stop="drawer = !drawer"></VAppBarNavIcon>
        <VNavigationDrawer v-model="drawer" app class="primary" hide-overlay width="100vw" height="auto" style="box-shadow:initial;">
          <VList>
            <VListItem>
              <VListItemIcon @click="drawer = !drawer">
                <VIcon>mdi-close</VIcon>
              </VListItemIcon>
            </VListItem>
            <div v-for="item in items" :key="item.title" >
              <VListItem @click="$router.push(item.route).catch(err => {drawer = !drawer})">
                <VListItemContent>
                    <span>{{item.title}}</span>
                </VListItemContent>
              </VListItem>
            </div>
          </VList>
        </VNavigationDrawer>
      </div>
      <div v-else>
        <VToolbarItems>
          <VBtn v-for="item in items" :key="item.title" @click="$router.push(item.route).catch(err => {})" depressed color="primary black--text" x-large>
          {{ item.title }}
          </VBtn>
        </VToolbarItems>
      </div>
    </VAppBar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", route: "/"},
        { title: "About", route: "/about"},
        { title: "Skills", route: "/skills"},
        { title: "Works", route: "/works"},
        { title: "Contact", route: "/contact"},
        // { title: "Posts", route: "/#posts"},
      ],
      drawer: false,
      group: null,
    }
  },
  watch: {
      group () {
        this.drawer = false
      },
    },
  methods: {
    // moveToTop() {
    //   this.$router.push({name: 'Home'}, () => {})
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    // }
  },
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  z-index: 10;
}
@keyframes navigation-move {
  from {
      transform: translateY(-100%);
  }
  to {
      transform: translateY(0%);
  }
}
@keyframes navigation-close {
  from {
      transform: translateY(0%);
  }
  to {
      transform: translateY(-100%);
  }
}
.v-navigation-drawer--close{
    animation-name: navigation-close;
    animation-duration: 0.4s;
}
.v-navigation-drawer--open {
    animation-name: navigation-move;
    animation-duration: 0.4s;
}
</style>