<template>
  <div class="row-wrapper">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :class="{ row: true, 'row-reverse': index % 2 === 1 }"
    >
      <figure>
        <video
          v-if="item.video"
          :ref="`video_${index}`"
          :src="require(`@/assets/images/${item.video}`)"
          muted
          playsinline
          loop
        ></video>
        <img
          v-else
          class="reveal"
          :src="require(`@/assets/images/${item.image}`)"
          :alt="item.title"
        />
      </figure>
      <div class="content">
        <h3 class="reveal">{{ item.title }}</h3>
        <p class="reveal">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal';
import data from '@/assets/data/portfolio.json';

export default {
  name: 'PortfolioItems',
  data() {
    return {
      isMobileView: false,
      items: data,
      videoObservers: [],
    };
  },
  mounted() {
    this.checkMobileView();
    this.$nextTick(() => {
      this.reinitializeScrollReveal();
      this.initializeVideoAutoplay();
    });
  },
  beforeUnmount() {
    this.videoObservers.forEach((observer) => observer.disconnect());
  },
  methods: {
    checkMobileView() {
      this.isMobileView = window.innerWidth < 992;
    },
    reinitializeScrollReveal() {
      ScrollReveal().clean('.reveal');
      ScrollReveal().reveal('.reveal', {
        distance: this.isMobileView ? '50px' : '100px',
        duration: 800,
        easing: 'ease-in-out',
        origin: 'bottom',
        interval: 250,
        scale: 0.95,
      });
    },
    initializeVideoAutoplay() {
      // Create an observer for each video
      this.items.forEach((item, index) => {
        if (item.video) {
          const videoElement = this.$refs[`video_${index}`][0];
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  videoElement.play();
                } else {
                  videoElement.pause();
                }
              });
            },
            { threshold: 0.5 } // Play when 50% of the video is in view
          );
          observer.observe(videoElement);
          this.videoObservers.push(observer);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.row-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 90%;
}

@media screen and (min-width: 650px) {
  .row-wrapper {
    gap: 10rem;
    padding-top: 9rem;
  }
}
</style>
