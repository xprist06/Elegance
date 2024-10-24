<template>
  <div class="row-wrapper">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :class="{ row: true, 'row-reverse': index % 2 === 1 }"
    >
      <div class="image-content-wrapper">
        <figure class="reveal">
          <img
            :src="require(`@/assets/images/projects/${item.image}`)"
            :alt="item.title"
          />
        </figure>
        <div class="image-slider reveal">
          <carousel
            :items-to-show="1"
            :transition="1500"
            :autoplay="2000"
            :wrap-around="true"
            pause-autoplay-on-hover
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
