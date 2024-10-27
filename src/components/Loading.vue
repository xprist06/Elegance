<template>
  <transition name="fade-out" @after-leave="handleAfterLeave">
    <div v-if="isVisible" class="loader-overlay">
      <div ref="lottieContainer" class="lottie-animation"></div>
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
      isVisible: true, // Controls visibility of the loader
    };
  },
  mounted() {
    // Load Lottie animation using a fixed path to the JSON file
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

    // Listen for animation complete event
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
      // Trigger fade-out effect after the animation completes
      this.isVisible = false;
    },
    handleAfterLeave() {
      // Clean up or emit an event when the loader has fully disappeared
      this.$emit('animationFinished');
    },
  },
};
</script>

<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.lottie-animation {
  width: 100%;
  height: 100%;
}

.fade-out-enter-active,
.fade-out-leave-active {
  transition: opacity 0.5s ease-out; /* Adjust the duration as needed */
}

.fade-out-enter,
.fade-out-leave-to {
  opacity: 0;
}
</style>
