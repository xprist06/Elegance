<template>
  <div class="row-wrapper">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :class="{ row: true, 'row-reverse': index % 2 === 1 }"
    >
      <div class="image-content-wrapper">
        <figure>
          <img
            :src="require(`@/assets/images/${item.video}`)"
            :alt="item.title"
          />
        </figure>
        <div class="image-slider">
          <carousel :items-to-show="1" :transition="1500">
            <slide v-for="image in item.images" :key="image">
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
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/assets/data/projects.json';

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'ProjectsItems',
  data() {
    return {
      items: data,
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
.row-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 90%;
  padding-top: 1rem;

  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
}

@media screen and (min-width: 1400px) {
  .row-wrapper {
    width: 100%;
  }
}
</style>
