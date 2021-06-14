<template>
  <VContainer>
    <VRow justify="center">
      <h1>Works</h1>
    </VRow>
    <VRow class="mt-5">
      <VCol cols="12" md="4" sm="6" v-for="(item, i) in items" :key="i">
        <VCard :href="item.url" target="_blank" color="primary" height="100%" class="ma-5 ma-md-auto">
          <VImg :src="item.imgSrc"></VImg>
          <VCardTitle class="purple--text text-center">
            {{ item.title }}
          </VCardTitle>
          <VCardText>
            {{ item.text }}
          </VCardText>
          <!-- <VCardSubtitle>
            {{ item.skill }}
          </VCardSubtitle> -->
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "nikoha", imgSrc: require("../assets/nikoha.png"), url: "https://github.com/H0R15H0/C_2012", skill: "HTML, CSS, JS, flask, openCV" , text: '2人の笑顔ではんこを押せる、オンライン提出用の婚姻届作成サービス.「本人の意思確認をしつつ文書のデジタル化を進めたい」「婚姻届にはんこを押すことの価値はそのまま残したい」というコンフリクトを解消すべく、婚姻届作成サービス「nikoha（にこは）」を開発することにしました。' },
        { title: "お家Bar", imgSrc: require("../assets/ouchibar.png"), url: "http://www.ouchi-bar.com/", skill: "ruby on rails, Vue.js" , text: '宅飲み用のアプリ。DBには１万種類のカクテルが登録されており、所持しているお酒やソフトドリンクを入力すると作れるカクテルを表示してくれます。※現在改良中' },
        { title: "trimo", imgSrc: require("../assets/trimo.png"), url: "https://trimo.netlify.app/", skill: "ruby on rails, Vue.js" , text: '「旅の選択肢を増や」したい「旅先に迷っている人」向けの「トリモ/Trimo」というプロダクトは、「他の人の旅の記録を参考にできるサービス」です。これは「自分の旅を記録し、それを他の人が参考」にでき、「旅行雑誌・旅行アプリ」とは違って「旅の記録を共有する機能」が備わっています。' },
      ]
    }
  }
}
</script>

<style>

</style>
