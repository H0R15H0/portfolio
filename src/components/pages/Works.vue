<template>
  <VContainer>
    <VRow justify="center">
      <h1>Works</h1>
    </VRow>
    <VRow class="mt-5" justify="center">
      <VCol cols="12" md="4" sm="6" v-for="(item, i) in items" :key="i">
        <VCard @click="window.open(item.url, '_blank')" color="primary" height="100%" class="ma-5 ma-md-auto" flat>
          <VImg :src="item.imgSrc" class="outlined"></VImg>
          <VCardTitle class="secondary_accent--text text-center">
            {{ item.title }} <VIcon small class="ml-2" color="secondary_accent">mdi-arrow-right</VIcon>
          </VCardTitle>
          <VCardText class="text-left">
            {{ item.text }}
          </VCardText>
          <VCardSubtitle class="mt-n3">
            {{ item.skill }}
          </VCardSubtitle>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
export default {
  data() {
    return {
      window: window,
      items: [
        { title: "お家Bar", imgSrc: require("@/assets/ouchibar.png"), url: "http://www.ouchi-bar.com/", skill: "ruby on rails, Vue.js" , text: 'お家にあるお酒とコンビニで買える材料から作れるカクテルを紹介するサービス。※現在ターゲットをピボットし改良中。' },
        { title: "nikoha", imgSrc: require("@/assets/nikoha.png"), url: "https://github.com/H0R15H0/C_2012", skill: "HTML, CSS, JS, flask, openCV" , text: '2人の笑顔ではんこを押せる、オンライン提出用の婚姻届作成サービス。' },
        { title: "trimo", imgSrc: require("@/assets/trimo.png"), url: "https://trimo.netlify.app/", skill: "ruby on rails, Vue.js" , text: '自分の旅を記録し、それを他の人が参考にできるサービス。' },
        { title: "touch_p", imgSrc: require("@/assets/touch_p.png"), url: "https://github.com/H0R15H0/touch_p", skill: "ruby gem, rspec, github actions" , text: "touch_p は 'mkdir -p' のように親ディレクトリがなくともファイルを作成できるcliツールです。" },
        { title: "Portfolio", imgSrc: require("@/assets/portfolio.png"), url: "/", skill: "Vue.js, Vuetify, vue router" , text: '本ポートフォリオサイトです。' },
        { title: "Horisho's Blog", imgSrc: require("@/assets/blog.png"), url: "https://github.com/H0R15H0/blog", skill: "Go/Gin, next, TS, mysql, ECS on EC2" , text: 'ブログです。現在作成中。。。' },
      ]
    }
  }
}
</script>

<style scoped>
.v-image.outlined {
  border: 1px solid var(--v-secondary-base);
  border-radius: 5px;
}
</style>
