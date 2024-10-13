<template>
  <div class="cards-wrapper">
    <div v-for="item in items" :key="item.id" :class="{ card: true }">
      <figure>
        <img
          :src="require(`@/assets/images/${item.image}`)"
          :alt="item.title"
        />
        <p v-if="!isMobileView">{{ item.description }}</p>
      </figure>
      <h2>{{ item.title }}</h2>
      <p class="intro-text">{{ item.post }}</p>
      <p v-if="isMobileView">{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal';
import data from '@/assets/data/team.json';

export default {
  name: 'TeamCards',
  data() {
    return {
      items: data,
      isMobileView: false,
    };
  },
  mounted() {
    this.checkMobileView();

    window.addEventListener('resize', this.checkMobileView);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobileView);
  },
  methods: {
    checkMobileView() {
      this.isMobileView = window.innerWidth < 992;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/functions';
@import '@/assets/scss/colors';
@import '@/assets/scss/variables';

.cards-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid $color-brown;
    width: 90%;
    padding: 2rem;

    h2 {
      font-size: $font-size-xxl;
    }
  }
}

@media screen and (min-width: 992px) {
  .cards-wrapper {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    padding-top: 4rem;

    .card {
      max-width: 440px;
    }
  }
}

@media screen and (min-width: 1200px) {
  .cards-wrapper {
    width: 100%;
  }
}
</style>
