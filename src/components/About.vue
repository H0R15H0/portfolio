<template>
  <VContainer>
    <h1>About</h1>
    <VRow justify="center" align="center">
      <VCol sm="3" cols="12">
        <VImg :src="require('../assets/horisho.jpeg')" max-width="30vw" max-height="30vh" style="margin:auto;" contain ></VImg>
      </VCol>
      <VCol sm="3" cols="12">
        <VList>
          <VListItem v-for="item in items" :key="item.id" class="my-n3">
            <VListItemTitle class="text-right">{{item.title}}:</VListItemTitle>
            <VListItemSubtitle class="black--text text-left pl-2">{{item.content}}</VListItemSubtitle>
          </VListItem>
        </VList>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, title: "Name", content: "horisho" },
        { id: 2, title: "University", content: "Nagoya.U" },
        { id: 3, title: "Birth", content: "2001/01/31" },
      ]
    }
  }
}
</script>

<style>

</style>