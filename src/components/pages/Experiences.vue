<template>
  <VContainer>
    <VRow justify="center" class="mb-5">
      <h1>Experiences</h1>
    </VRow>
    <ExperiencesHistory></ExperiencesHistory>

    <VRow justify="center" class="my-5">
      <h1>Conferences / LT</h1>
    </VRow>
    <Conferences></Conferences>
  </VContainer>
</template>

<script>
import ExperiencesHistory from "@/components/organisms/experiences/ExperiencesHistory";
import Conferences from "@/components/organisms/experiences/Conferences";

export default {
  components: {
    ExperiencesHistory,
    Conferences,
  }
}
</script>

<style>

</style>