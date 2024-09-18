<template>
  <footer>
    <div class="content-top">
      <nav class="nav-left">
        <ul>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/images/logo-gold.png" alt="Logo" />
        </router-link>
      </div>
      <!-- <nav class="nav-right">
        <ul>
          <li><router-link to="/contact">Investors-clients</router-link></li>
        </ul>
      </nav> -->
    </div>
    <div class="delimiter"></div>
    <div class="content-bottom">
      <p>Copyright Elegance investiční společnost © 2024</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/functions';
@import '@/assets/scss/colors';
@import '@/assets/scss/variables';

footer {
  flex-direction: column;
  justify-content: center;
  background-color: $footer-bg;
  padding: 105px 170px;
}

a,
p {
  color: $text-color-golden;
}

.content-top,
.content-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
}

.delimiter {
  width: 100%;
  height: 1px;
  background-color: $color-golden;
  margin: 80px 0;
}
</style>
