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
    <VRow justify="center">
      <VCol sm="9" cols="12" class="text-left">
        名古屋大学情報学部コンピュータ科学科に所属する３年生です。<br>
        大学入学後アプリ開発サークルに所属し、それからプログラミングに触れ始めました。
        なのでプログラミング経験は２年ほどです。<br>
        現在代表を勤めております。後輩たちの成長が凄まじく追い越されないよう日々勉強してます。。。<br>
        最近はRails, Vueばかりを触っていますが、新しい技術に触れるのが好きなのでその他言語も広く浅く学んでいます。
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