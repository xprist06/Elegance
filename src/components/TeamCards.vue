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
    gap: 1rem;
  }
}

@media screen and (min-width: 992px) {
  .cards-wrapper {
    flex-direction: row;
    width: 90%;

    .card {
      gap: 1.5rem;
    }
  }
}

@media screen and (min-width: 1400px) {
  .cards-wrapper {
    width: 100%;
  }
}
</style>
