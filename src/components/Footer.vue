<template>
  <figure class="arch">
    <img src="@/assets/images/arches/green-arch.png" />
  </figure>
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
  padding: 87px 74px;
}

a,
p {
  color: $text-color-golden;
}

.content-top,
.content-bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
}

.content-top {
  flex-direction: column-reverse;
  gap: 55px;
}

.nav-left {
  width: 100%;
  justify-content: center;

  ul {
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 40px;
  }
}

.content-bottom {
  width: clamp(250px, 250px, 90%);

  p {
    text-align: center;
  }
}

.delimiter {
  width: 100%;
  height: 1px;
  background-color: $color-golden;
  margin: 64px 0;
}

@media screen and (min-width: 992px) {
  footer {
    padding: 105px 170px;
  }

  .logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  .content-top,
  .content-bottom {
    flex-direction: row;
  }

  .nav-left {
    width: 100%;
    justify-content: left;

    ul {
      align-items: center;
      flex-direction: row;
      width: 100%;
      gap: 20px;
    }
  }

  .delimiter {
    margin: 80px 0;
  }
}
</style>
