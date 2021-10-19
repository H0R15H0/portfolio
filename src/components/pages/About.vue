<template>
  <VContainer>
    <VRow justify="center">
      <h1>About</h1>
    </VRow>
    <!-- <VRow justify="center" align="center">
      <VCol sm="3" cols="12">
        <VImg :src="require('../assets/horisho.png')" max-width="30vw" max-height="30vh" style="margin:auto;" contain ></VImg>
      </VCol>
    </VRow> -->
    <VRow>
      <ProfileCards></ProfileCards>
    </VRow>
    <VRow justify="center">
      <VCol sm="9" cols="12" class="text-left">
        名古屋大学情報学部コンピュータ科学科に所属する３年生です。<br>
        大学入学後アプリ開発サークルに所属し、それからプログラミングに触れ始めました。
        なのでプログラミング経験は２年ほどです。現在代表を勤めております。後輩たちの成長が凄まじく追い越されないよう日々勉強してます。。。<br>
      </VCol>
    </VRow>
    <VRow justify="center">
      <VCol sm="9" cols="12" class="text-left">
        <VRow justify="start" class="mb">
          <VCol sm="2" cols="3" class="text-left">
            <h2><span class="font-weight-black accent--text mr-1">|</span>Recent</h2>
          </VCol>
        </VRow>
        地獄のような学生実験が終わりました！！！
        ずっと触りたかったGoをようやく始められます！このポートフォリオのバックエンドをGoのフレームワークGinで開発しようと考えています。
        サマーインターンに備えて基礎的な部分(TCP/IP等)からインフラ部分(Docker, AWS, CICD)まで学んでいこうと思っています。
        TOEICの勉強にも取り組んでいます。目標は院試の一つの基準でもある807点です。
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
import ProfileCards from "@/components/organisms/ProfileCards.vue"

export default {
  components: {
    ProfileCards,
  },
}
</script>

<style scoped>
</style>
