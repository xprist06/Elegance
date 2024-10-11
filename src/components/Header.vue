<template>
  <header>
    <div class="content-top">
      <nav class="nav-left" v-if="!isMobileView">
        <ul>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
      <div class="logo">
        <router-link to="/">
          <img
            :src="
              isMobileView
                ? require('@/assets/images/logo-header-mobile.png')
                : require('@/assets/images/logo.png')
            "
            alt="Logo"
            @click="closeMenu"
          />
        </router-link>
      </div>
      <div class="hamburger" @click="toggleMenu" v-if="isMobileView">
        <img src="@/assets/images/mobile-menu-icon.png" alt="" />
      </div>
    </div>
    <transition name="slide-fade">
      <nav
        :class="{ 'mobile-navbar': true, 'nav-active': isMenuOpen }"
        v-if="isMobileView"
      >
        <ul>
          <li>
            <router-link to="/about" @click="closeMenu">About</router-link>
          </li>
          <li>
            <router-link to="/contact" @click="closeMenu">Contact</router-link>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',

  data() {
    return {
      isMobileView: false,
      isMenuOpen: false,
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
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    checkMobileView() {
      this.isMobileView = window.innerWidth < 992;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/functions';
@import '@/assets/scss/colors';
@import '@/assets/scss/variables';

header {
  flex-direction: column;
  align-items: flex-end;
  background-color: $header-bg;
  padding: 51px 24px;
  z-index: 99;

  .content-top {
    position: relative;
    justify-content: flex-end;
    width: 100%;
  }

  .content-top {
    display: flex;
  }
}

a {
  color: $text-color-dark;
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
}

.mobile-navbar {
  display: none;
  width: 100%;

  &.nav-active {
    display: flex;
    padding: 2rem 0 0;
  }

  ul {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}

@media screen and (min-width: 992px) {
  header {
    padding: 51px 180px;

    .content-top,
    .content-bottom {
      justify-content: flex-start;
    }
  }

  .logo {
    transform: translate(-50%, -50%);

    a {
      display: flex;
      justify-content: center;

      img {
        width: 75%;
      }
    }
  }

  .nav-left {
    ul {
      gap: 20px;
    }
  }
}

@media screen and (min-width: 1600px) {
  header {
    padding: 70px 180px;
  }
}
</style>
