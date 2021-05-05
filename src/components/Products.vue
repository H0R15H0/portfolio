<template>
  <VContainer>
    <h1>Products</h1>
    <VRow>
      <VCol cols="12" sm="6" v-for="(item, i) in items" :key="i" style="height:100%;">
        <VCard :href="item.url" target="_blank" >
          <VCardTitle class="purple--text text-center">
            {{ item.title }}
          </VCardTitle>
          <VCardText>
            {{ item.text }}
          </VCardText>
          <VCardSubtitle>
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
      items: [
        { title: "HONOexchange", url: "https://github.com/H0R15H0/HONOexchange", skill: "HTML, CSS, JS, flask" , text: '"HONOexchange"とは、教授や目上のあの人に送るメールを手軽に作れるサービスです。必要な情報さえ入力ししてしまえばあとはこの"HONOexchange"が勝手にメール本文を作成してくれます。あなたがするのはコピペだけ！ こんな便利な"HONOexchange"、使わない手はありません。ぜひご活用ください！' },
        { title: "rakuXsta", url: "https://github.com/Koba252/rakuXsta", skill: "Xamarin" , text: '気軽にスタンプカードを作成できるアプリ。QRコードで簡単にポイントを付与することができます。' },
        { title: "nikoha", url: "https://github.com/jphacks/C_2012", skill: "HTML, CSS, JS, flask, openCV" , text: '2人の笑顔ではんこを押せる、オンライン提出用の婚姻届作成サービス.「本人の意思確認をしつつ文書のデジタル化を進めたい」「婚姻届にはんこを押すことの価値はそのまま残したい」というコンフリクトを解消すべく、私たちは婚姻届作成サービス「nikoha（にこは）」を開発することにしました。' },
        { title: "お家Bar", url: "http://www.ouchi-bar.com/", skill: "ruby on rails, Vue.js" , text: '宅飲み用のアプリ。DBには１万種類のカクテルが登録されており、所持しているお酒やソフトドリンクを入力すると作れるカクテルを表示してくれます。※現在改良中' },
        { title: "trimo", url: "https://trimo.netlify.app/", skill: "ruby on rails, Vue.js" , text: '「旅の選択肢を増や」したい「旅先に迷っている人」向けの「トリモ/Trimo」というプロダクトは、「他の人の旅の記録を参考にできるサービス」です。これは「自分の旅を記録し、それを他の人が参考」にでき、「旅行雑誌・旅行アプリ」とは違って「旅の記録を共有する機能」が備わっています。' },
        { title: "オフラトゥーン", url: "https://offlatoon.netlify.app/index.html", skill: "fastapi, GoogleMapsAPI, html, css, js", text: "jackHack2021で作成したオフライン陣取りWebゲーム。GoogleMap上で通った場所が自分の陣地となり競ってもらいます。" }
      ]
    }
  }
}
</script>

<style>

</style>
