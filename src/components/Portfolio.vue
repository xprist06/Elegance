<template>
  <div class="row-wrapper">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :class="{ row: true, 'row-reverse': index % 2 === 1 }"
    >
      <figure>
        <img
          :src="require(`@/assets/images/${item.image}`)"
          :alt="item.title"
        />
      </figure>
      <div class="content">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/assets/data/portfolio.json';

export default {
  name: 'PortfolioItems',
  data() {
    return {
      items: data,
    };
  },
};
</script>

<style lang="scss" scoped>
.row-wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

@media screen and (min-width: 650px) {
  .row-wrapper {
    gap: 10rem;
    padding-top: 10rem;
  }
}
</style>
