<template>
  <VContainer>
    <VRow justify="center" align="center">
      <VCol cols="9" md="12" class="box">
        <VImg :src="require('@/assets/welcome.svg')" max-width="700px" style="margin: auto;"></VImg>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
.box {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
