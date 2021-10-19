<template>
  <VContainer>
    <VRow v-for="item in items" :key="item.title" justify="center" no-gutters>
      <VCol cols="12" sm="7" md="5">
        <GoogleSlideViewer :src="item.slideUrl" style="max-width: 100%; max-height: 300px;"/>
      </VCol>
      <VCol cols="11" sm="4" offset="1" align-self="center">
        <VCard elevation="0" color="primary">
          <VCardTitle class="font-weight-black">{{ item.title }}</VCardTitle>
          <VCardText class="text-left">
            <div>イベント名：{{ item.eventName }}</div>
            <div>主催：{{ item.place }}</div>
            <div>日時：{{ item.date }}</div>
            <div v-if="item.description">{{ item.description }}</div>
            <div class="mt-1 font-weight-medium text--primary">{{ item.content }}</div>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
import GoogleSlideViewer from "@/components/atoms/GoogleSlideViewer";

export default {
  components: {
    GoogleSlideViewer,
  },
  data() {
    return {
      items: [
        { title: "5分でちょっとだけわかった気になれるDockerのすすめ", place: "jack", eventName: "jackResult2021春", description: "", date: "2021/03/20", slideUrl: "https://docs.google.com/presentation/d/e/2PACX-1vSfcTt4IQG38drgmYYo9Iv2m5HxKxPZVK2Ta1POLGRQUGgXpwa_WtC8q-_LGFHmmN2R9K92f82Ux0Qj/embed?start=false&loop=false&delayms=3000" },
        { title: "俺流ググり方講座", place: "jack & Joken", eventName: "jack X JokenコラボLT", description: "テーマ「開発で困ったこと」", date: "2021/09/10", slideUrl: "https://docs.google.com/presentation/d/e/2PACX-1vTu161a0oTMa9cUVqnjJNFc3B2PmwjA4m9XihhWFc1jid6Sq8O3kaLrjAq8Ox1aXfqCY-IFpKk12H5L/embed?start=false&loop=false&delayms=3000" },
      ],
    }
  }
}
</script>

<style>

</style>