<template>
  <div class="row-wrapper">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :class="{ row: true, 'row-reverse': index % 2 === 1 }"
    >
      <figure>
        <!-- <video-player
          v-if="item.video"
          class="video-player"
          ref="videoPlayer"
          :options="getVideoOptions(item.video)"
          :playsinline="true"
        ></video-player>

        <img
          v-else
          :src="require(`@/assets/images/${item.image}`)"
          :alt="item.title"
        /> -->
        <img
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
// import 'video.js/dist/video-js.css';
// import { VideoPlayer } from '@videojs-player/vue';
import ScrollReveal from 'scrollreveal';
import data from '@/assets/data/portfolio.json';

export default {
  name: 'PortfolioItems',
  data() {
    return {
      items: data,
    };
  },
  mounted() {
    ScrollReveal().reveal('.reveal', {
      distance: '50px', // Distance the element moves
      duration: 800, // Duration of animation
      easing: 'ease-in-out', // Type of easing
      origin: 'bottom', // Where the animation starts (top, right, bottom, left)
      interval: 100, // Delay between animations
    });
  },
  // beforeUnmount() {
  //   if (this.$refs.videoPlayer) {
  //     this.$refs.videoPlayer.dispose();
  //   }
  // },
  // methods: {
  //   getVideoOptions(videoSrc) {
  //     return {
  //       controls: true,
  //       autoplay: false,
  //       aspectRatio: '16:9', // Customize as needed
  //       sources: [
  //         {
  //           src: require(`@/assets/videos/${videoSrc}`), // Use video path
  //           type: 'video/mp4',
  //         },
  //       ],
  //     };
  //   },
  // },
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
    padding-top: 10rem;
  }
}
</style>
