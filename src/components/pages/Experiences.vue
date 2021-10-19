<template>
  <VContainer>
    <VRow justify="center" class="mb-5">
      <h1>Experiences</h1>
    </VRow>
    <ExperiencesHistory></ExperiencesHistory>
  <div>This is Experivence.vue</div>
  </VContainer>
</template>

<script>
import ExperiencesHistory from "@/components/organisms/experiences/ExperiencesHistory";

export default {
  components: {
    ExperiencesHistory,

  }
}
</script>

<style>

</style>