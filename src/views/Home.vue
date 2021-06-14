<template>
  <div>
    <VContainer>
      <VRow justify="center" align="center">
        <VCol cols="9" md="12" class="block">
          <VImg :src="require('@/assets/welcome.svg')" max-width="700px" style="margin: auto;" eager></VImg>
        </VCol>
      </VRow>
    </VContainer>
    <div class="fadeIn">
      <div v-for="box in boxes" :key="box.class" :class="box.class"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      boxes: [
        { class: "square1 animated-left-bottom" },
        { class: "square2 animated-right-top" },
        { class: "square3 animated-right-bottom" },
        { class: "circle1 animated-left-top" },
        { class: "circle2 animated-left-bottom" },
        { class: "circle3 animated-right-bottom" },
      ]
    }
  }
}
</script>

<style scoped>
.block {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.square1 {
  background: var(--v-secondary-base);
  position: fixed;
  max-width: 130px;
  max-height: 130px;
  width: 20vw;
  height: 20vw;
  transform: rotate(20deg);
  border-radius: 10px;
  bottom: 20vh;
  left: 10vw;
}
.square2 {
  background: var(--v-secondary-base);
  position: fixed;
  max-width: 90px;
  max-height: 90px;
  width: 15vw;
  height: 15vw;
  transform: rotate(20deg);
  border-radius: 8px;
  top: 30vh;
  right: 20vw;
}
.square3 {
  background: var(--v-secondary-base);
  position: fixed;
  max-width: 50px;
  max-height: 50px;
  width: 8vw;
  height: 8vw;
  transform: rotate(20deg);
  border-radius: 8px;
  bottom: 10vh;
  right: 30vw;
}
.circle1 {
  background: var(--v-accent-base);
  position: fixed;
  max-width: 40px;
  max-height: 40px;
  width: 6vw;
  height: 6vw;
  border-radius: 50%;
  top: 30vh;
  left: 30vw;
}
.circle2 {
  background: var(--v-accent-base);
  position: fixed;
  max-width: 30px;
  max-height: 30px;
  width: 4vw;
  height: 4vw;
  border-radius: 50%;
  bottom: 20vh;
  left: 45vw;
}
.circle3 {
  background: var(--v-accent-base);
  position: fixed;
  max-width: 60px;
  max-height: 60px;
  width: 9vw;
  height: 9vw;
  border-radius: 50%;
  bottom: 15vh;
  right: 15vw;
}
@keyframes fadeIn {
    from {
        opacity:0;
    }
    to {
        opacity:0.5;
    }
}
.fadeIn {
    opacity: 0;
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 6s;
    animation-fill-mode: forwards;
}
@keyframes move-left-bottom {
  from {
    transform: translate(0,0) rotate(20deg) scale(1);
  }
  to {
    transform: translate(-10px,10px) rotate(20deg) scale(1.05);
  }
}
@keyframes move-right-bottom {
  from {
    transform: translate(0,0) rotate(20deg) scale(1);
  }
  to {
    transform: translate(10px,10px) rotate(20deg) scale(1.05);
  }
}
@keyframes move-left-top {
  from {
    transform: translate(0,0) rotate(20deg) scale(1);
  }
  to {
    transform: translate(-10px,-10px) rotate(20deg) scale(1.05);
  }
}
@keyframes move-right-top {
  from {
    transform: translate(0,0) rotate(20deg) scale(1);
  }
  to {
    transform: translate(10px,-10px) rotate(20deg) scale(1.05);
  }
}
.animated-left-top {
  animation: move-left-top 1.5s infinite alternate ease-in-out;
  display: inline-block;
}
.animated-right-top {
  animation: move-right-top 1.5s infinite alternate ease-in-out;
  display: inline-block;
}
.animated-left-bottom {
  animation: move-left-bottom 1.5s infinite alternate ease-in-out;
  display: inline-block;
}
.animated-right-bottom {
  animation: move-right-bottom 1.5s infinite alternate ease-in-out;
  display: inline-block;
}
</style>
