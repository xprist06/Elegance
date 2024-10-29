<template>
  <div class="row-wrapper">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :class="{ row: true, 'row-reverse': index % 2 === 1 }"
    >
      <div class="image-content-wrapper">
        <figure class="reveal">
          <video
            v-if="item.video"
            :ref="`video_${index}`"
            :src="require(`@/assets/images/projects/${item.video}`)"
            muted
            playsinline
            loop
          ></video>
          <img
            v-else
            :src="require(`@/assets/images/projects/${item.image}`)"
            :alt="item.title"
          />
        </figure>
        <div class="image-slider">
          <carousel
            ref="carousel"
            :key="`carousel_${index}`"
            :items-to-show="1"
            :transition="1500"
            :autoplay="2000"
            :wrap-around="true"
            pause-autoplay-on-hover
            :class="['reveal-carousel', { visible: visibilityStates[index] }]"
            :style="{ transitionDelay: `${index * 0.25}s` }"
          >
            <slide v-for="image in item.sliderImages" :key="image">
              <img
                :src="require(`@/assets/images/projects/${image}`)"
                :alt="item.title"
              />
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
        </div>
      </div>
      <div class="text-content-wrapper">
        <h3 class="reveal">{{ item.title }}</h3>
        <p class="reveal">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal';
import data from '@/assets/data/projects.json';

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'ProjectsItems',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      items: data,
      videoObservers: [],
      visibilityStates: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.visibilityStates = Array(this.items.length).fill(false);
      this.observeCarousels();
      this.reinitializeScrollReveal();
      this.initializeVideoAutoplay();
    });
  },
  methods: {
    observeCarousels() {
      this.$refs.carousel.forEach((carousel, index) => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.visibilityStates[index] = true; // Reveal only this carousel
              observer.unobserve(entry.target); // Stop observing once revealed
            }
          });
        });
        observer.observe(carousel.$el); // Observe carousel element
      });
    },
    reinitializeScrollReveal() {
      ScrollReveal().clean('.reveal');
      ScrollReveal().reveal('.reveal', {
        distance: this.isTabletView ? '50px' : '100px',
        duration: 800,
        easing: 'ease-in-out',
        origin: 'bottom',
        interval: 250,
        scale: 0.95,
      });
    },
    initializeVideoAutoplay() {
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
  gap: 8rem;
  width: 90%;
  padding-top: 1rem;

  .row {
    display: flex;
    flex-direction: column;
    align-items: center;

    .carousel__pagination {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
}

.reveal-carousel {
  visibility: hidden;
  opacity: 0;
  transform: translateY(100px); /* Initial hidden state */
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;

  &.visible {
    visibility: visible;
    opacity: 1;
    transform: translateY(0); /* Reveal effect */
  }
}

@media screen and (min-width: 992px) {
  .row-wrapper {
    padding-top: 3rem;

    .row {
      gap: 4rem;

      .carousel__pagination {
        margin-top: 0.8rem;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .row-wrapper {
    width: 100%;
    gap: 8rem;

    .row {
      gap: 8rem;
    }
  }
}
</style>
