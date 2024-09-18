<template>
  <div
    v-for="(item, index) in items"
    :key="item.id"
    :class="{ row: true, 'row-reverse': index % 2 === 1 }"
  >
    <figure>
      <img :src="require(`@/assets/images/${item.image}`)" :alt="item.title" />
    </figure>
    <div class="content">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
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

<style lang="scss" scoped></style>
