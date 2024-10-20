<template>
  <div id="about" class="content-wrapper">
    <section id="title">
      <figure>
        <img src="@/assets/images/about-title.jpg" alt="About title image" />
        <div class="filter"></div>
      </figure>
      <div class="text-content">
        <h2 :class="{ 'header-xl': isMobileView, reveal: true }">
          investing in luxury real estates
        </h2>
      </div>
    </section>
    <section id="about-us">
      <figure class="arch golden" :style="{ '--top-value': topValue }">
        <img
          src="@/assets/images/arches/golden-arch.svg"
          ref="archImage"
          @load="setTopValue"
        />
      </figure>
      <div class="container">
        <div class="vertical-delimiter no-margin reveal"></div>
        <div id="experience">
          <div>
            <h1 v-if="isMobileView" class="reveal">+10</h1>
            <h2 v-if="!isMobileView" class="reveal">+10</h2>
            <p class="reveal">YEARS OF EXPERIENCE WITH REDEVELOPMENT</p>
          </div>
          <div>
            <h1 v-if="isMobileView" class="reveal">+10</h1>
            <h2 v-if="!isMobileView" class="reveal">+10</h2>
            <p class="reveal">projects designed and created</p>
          </div>
          <div>
            <h1 v-if="isMobileView" class="reveal">+32€ MIL</h1>
            <h2 v-if="!isMobileView" class="reveal">+32€ MIL</h2>
            <p class="reveal">SHAREHOLDER'S EQUITY</p>
          </div>
          <div>
            <h1 v-if="isMobileView" class="reveal">4</h1>
            <h2 v-if="!isMobileView" class="reveal">4</h2>
            <p class="reveal">COUNTRIES IN EUROPE</p>
          </div>
        </div>
        <div id="company">
          <figure class="reveal">
            <img
              src="@/assets/images/about-company.jpg"
              alt="About our company"
            />
          </figure>
          <div class="company-wrapper">
            <p class="intro-text reveal">elegance</p>
            <div class="content-wrapper">
              <h2 class="reveal">sustainable growth and attractive returns</h2>
              <p class="info-text reveal">
                We are dedicated to curating and managing a diverse portfolio of
                luxury properties to elevate your investment. Specializing in
                small-scale luxury residential projects, transformative
                refurbishments for ultra-high-net-worth individuals, and
                exclusive hospitality and mixed-use properties, we provide you
                with access to some of Europe’s most coveted locations. Each
                property is chosen for its sublime views, impressive amenities,
                and superior infrastructure, offering a luxurious lifestyle with
                long-term value.
              </p>
            </div>
          </div>
        </div>
        <div id="our-job">
          <div class="vertical-delimiter reveal"></div>
          <p class="intro-text reveal">what we do</p>
          <h2 class="reveal">
            <span>develop, acquireand manage</span> luxury property portfolios
          </h2>
          <div class="card-wrapper">
            <div class="card reveal">
              <figure>
                <img
                  src="@/assets/images/about-company.jpg"
                  alt="About our company"
                />
              </figure>
              <p class="intro-text">OUR main focus</p>
              <h2>Value Creation</h2>
              <p>
                Designing and developing small-scale luxury residential projects
                and transformative refurbishments aimed at UHNWIs
              </p>
            </div>
            <div class="card reveal">
              <figure>
                <img
                  src="@/assets/images/about-company.jpg"
                  alt="About our company"
                />
              </figure>
              <p class="intro-text">add-ons</p>
              <h2>Stable Cash-flow</h2>
              <p>
                Assisting with the acquisition and management of hospitality and
                mixed-use properties
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <figure class="arch">
      <img src="@/assets/images/arches/green-arch.png" />
    </figure>
    <section id="projects">
      <div class="container">
        <div class="vertical-delimiter reveal"></div>
        <p class="intro-text reveal">portfolio</p>
        <h2 class="reveal">Our recent projects</h2>
        <projects-items></projects-items>
      </div>
    </section>
    <figure class="arch">
      <img src="@/assets/images/arches/green-arch-xl.png" />
    </figure>
    <section id="our-team">
      <div class="container">
        <div class="vertical-delimiter reveal"></div>
        <p class="intro-text reveal">our team</p>
        <h2 class="reveal">meet the team</h2>
        <team-cards></team-cards>
      </div>
    </section>
  </div>
  <figure class="arch">
    <img src="@/assets/images/arches/green-arch.png" />
  </figure>
</template>

<script>
import ScrollReveal from 'scrollreveal';

import TeamCards from '../components/TeamCards.vue';
import ProjectsItems from '@/components/Projects.vue';

export default {
  name: 'AboutPage',
  components: {
    TeamCards,
    ProjectsItems,
  },
  data() {
    return {
      isMobileView: false,
      topValue: '0px',
    };
  },
  mounted() {
    this.checkMobileView();

    window.addEventListener('resize', this.checkMobileView);
    window.addEventListener('resize', this.setTopValue);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobileView);
    window.removeEventListener('resize', this.setTopValue);
  },
  methods: {
    checkMobileView() {
      this.isMobileView = window.innerWidth < 992;
      this.$nextTick(() => {
        this.reinitializeScrollReveal();
      });
    },

    setTopValue() {
      const width = this.$refs.archImage.clientWidth;
      this.topValue = `-${width / 31}px`;
    },

    reinitializeScrollReveal() {
      ScrollReveal().reveal('.reveal', {
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        origin: 'bottom',
        interval: 100,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
