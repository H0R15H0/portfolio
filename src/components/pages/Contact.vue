<template>
  <VContainer>
    <VRow justify="center">
      <h1>Contact</h1>
    </VRow>
    <VRow justify="center" class="mt-5">
      <VIcon x-large class="ma-3" @click="window.open('https://github.com/H0R15H0', '_blank')">mdi-github</VIcon>
      <VIcon x-large class="ma-3" @click="window.open('https://twitter.com/H0R15H0', '_blank')">mdi-twitter</VIcon>
      <a @click="window.open('https://qiita.com/horisho13', '_blank')" class="ma-3" style="width:40px; height:40px;">
        <VImg :src="require('@/assets/qiita.png')"></VImg>
      </a>
      
      <a href="mailto:info.horisho13@gmail.com"><VIcon x-large class="ma-3">mdi-email</VIcon></a>
    </VRow>
    <VRow justify="center">
      <VCol><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfBodcQNBAuKcZDc_2Ne82QTNmbcjO8-XG2zIHyhnooVfpJsw/viewform?embedded=true" width="100%" height="794px" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">読み込んでいます…</iframe></VCol>
    </VRow>
  </VContainer>
</template>

<script>
export default {
  data() {
    return {
      window: window,
    }
  }
}
</script>

<style>

</style>