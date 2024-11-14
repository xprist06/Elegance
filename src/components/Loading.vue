<template>
  <transition name="fade-out" @after-leave="handleAfterLeave">
    <div
      v-if="isVisible"
      class="loader-overlay"
      :class="{ 'fade-out': overlayFadedOut }"
    >
      <div
        ref="lottieContainer"
        class="lottie-animation"
        :class="{ 'scroll-to-top': svgScrolledUp }"
      ></div>
    </div>
  </transition>
</template>

<script>
import lottie from 'lottie-web';
import animationData from '@/assets/videos/Elegance.json';

export default {
  name: 'EleganceLoading',
  data() {
    return {
      isVisible: true,
      svgScrolledUp: false,
      overlayFadedOut: false,
    };
  },
  mounted() {
    this.lottieInstance = lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      animationData,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    });

    this.lottieInstance.addEventListener('complete', () => {
      this.onAnimationComplete();
    });
  },
  beforeUnmount() {
    if (this.lottieInstance) {
      this.lottieInstance.destroy();
    }
  },
  methods: {
    onAnimationComplete() {
      this.svgScrolledUp = true;
      this.overlayFadedOut = true;
      setTimeout(() => {
        this.isVisible = false;
      }, 0);
    },
    handleAfterLeave() {
      this.$emit('animationFinished');
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/functions';
@import '@/assets/scss/colors';

.loader-overlay {
  position: fixed;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: center;
  background: $color-dark;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  transition: all 0.5s ease-out;

  &.fade-out {
    opacity: 0;
  }
}

.lottie-animation {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all 1s ease-out;

  &.scroll-to-top {
    transform: translateY(-100px);
  }
}

// .fade-out-enter-active,
// .fade-out-leave-active {
//   transition: all 0.5s ease-out;
// }

// .fade-out-enter,
// .fade-out-leave-to {
//   opacity: 0;
//   svg {
//     transform: translateY(-250px);
//   }
// }
</style>
