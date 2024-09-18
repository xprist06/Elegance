<template>
  <header>
    <nav class="nav-left">
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo.png" alt="Logo" />
      </router-link>
    </div>
    <!-- <nav class="nav-right">
      <ul>
        <li><router-link to="/clients">Investors-clients</router-link></li>
      </ul>
    </nav> -->
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/functions';
@import '@/assets/scss/colors';
@import '@/assets/scss/variables';

header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: $header-bg;
  padding: 70px 180px;
  z-index: 99;
}

a {
  color: $text-color-dark;
}
</style>
