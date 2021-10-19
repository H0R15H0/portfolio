<template>
<VContainer>
  <VRow justify="center"> <!-- 資格が増えてカードが3つになったら space-around に -->
    <VCol sm="3" cols="7" v-for="item in items" :key="item.title">
      <VCard color="primary" flat>
        <VImg :src="item.imgSrc" width="70%" aspect-ratio="1" style="border-radius:100px; margin:auto;"></VImg>
        <VRow justify="center">
          <VCardTitle class="accent--text font-weight-bold">{{ item.title }}</VCardTitle>
        </VRow>
        <VRow justify="center">
          <ul>
            <li v-for="content in item.contents" :key="content">{{content}}</li>
          </ul>
        </VRow>
      </VCard>
    </VCol>
  </VRow>
</VContainer>
</template>

<script>
export default { 
  name: "ProfileCards",
  data() {
    return {
      items: [
        { title: "Profile", imgSrc: require("@/assets/profile.png"), contents:["堀崎祥", "名古屋大学", "2001/01/31"] },
        { title: "Favorite", imgSrc: require("@/assets/aquarium.png"), contents:["水族館", "映画鑑賞"] },
        // { title: "Qualification", imgSrc: require("@/assets/qualification.png"), contents:["TOIEC: 000", "hogehoge"] },
      ]
    }
  },
}
</script>

<style>
</style>