<template>
  <iframe :src="src"
          frameborder="0"
          width="960"
          height="569"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true">
  </iframe>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    }
  }

}
</script>

<style>

</style>