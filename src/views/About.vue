<template>
  <div id="about" class="content-wrapper">
    <section id="title">
      <figure>
        <img src="@/assets/images/about-title.jpg" alt="About title image" />
        <div class="filter"></div>
      </figure>
      <div class="text-content">
        <h2 :class="{ 'header-xl': isMobileView }">
          investing in luxury real estates
        </h2>
      </div>
    </section>
    <section id="about-us">
      <figure class="arch golden" :style="{ '--top-value': topValue }">
        <img
          src="@/assets/images/arches/golden-arch.png"
          ref="archImage"
          @load="setTopValue"
        />
      </figure>
      <div class="container">
        <div class="vertical-delimiter no-margin"></div>
        <div id="experience">
          <div>
            <h1 v-if="isMobileView">+10</h1>
            <h2 v-if="!isMobileView">+10</h2>
            <p>YEARS OF EXPERIENCE WITH REDEVELOPMENT</p>
          </div>
          <div>
            <h1 v-if="isMobileView">+10</h1>
            <h2 v-if="!isMobileView">+10</h2>
            <p>PROJECTS CREATED</p>
          </div>
          <div>
            <h1 v-if="isMobileView">+32€ MIL</h1>
            <h2 v-if="!isMobileView">+32€ MIL</h2>
            <p>SHAREHOLDER'S EQUITY</p>
          </div>
          <div>
            <h1 v-if="isMobileView">4</h1>
            <h2 v-if="!isMobileView">4</h2>
            <p>COUNTRIES IN EUROPE</p>
          </div>
        </div>
        <div id="company">
          <figure>
            <img
              src="@/assets/images/about-company.jpg"
              alt="About our company"
            />
          </figure>
          <div class="company-wrapper">
            <p class="intro-text">elegance</p>
            <div class="content-wrapper">
              <h2>
                Creating sustainable value and attractive returns for our
                clients
              </h2>
              <p class="info-text">
                At Elegance, we specialize in developing, acquiring, and
                managing a diverse portfolio of luxury properties. Our focus
                includes small-scale luxury residential projects, transformative
                refurbishments for ultra-high-net-worth individuals, and
                hospitality and mixed-use properties. We offer exclusive access
                to prime residential projects in sought-after locations across
                Europe, known for their scenic views, amenities, and superior
                infrastructure.
              </p>
            </div>
          </div>
        </div>
        <div id="our-job">
          <div class="vertical-delimiter"></div>
          <p class="intro-text">what we do</p>
          <h2>
            <span>developing, acquiring and managing portfolios of</span> luxury
            properties
          </h2>
          <div class="card-wrapper">
            <div class="card">
              <figure>
                <img
                  src="@/assets/images/about-company.jpg"
                  alt="About our company"
                />
              </figure>
              <p class="intro-text">main focus</p>
              <h2>Value Creation</h2>
              <p>
                Development of small-scale luxury residential projects and
                transformative refurbishments aimed at UHNWIs
              </p>
            </div>
            <div class="card">
              <figure>
                <img
                  src="@/assets/images/about-company.jpg"
                  alt="About our company"
                />
              </figure>
              <p class="intro-text">main focus</p>
              <h2>Value Creation</h2>
              <p>
                Development of small-scale luxury residential projects and
                transformative refurbishments aimed at UHNWIs
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
        <div class="vertical-delimiter"></div>
        <p class="intro-text">portfolio</p>
        <h2>Our most recent projects</h2>
        <projects-items></projects-items>
      </div>
    </section>
    <figure class="arch">
      <img src="@/assets/images/arches/green-arch-xl.png" />
    </figure>
    <section id="our-team">
      <div class="container">
        <div class="vertical-delimiter"></div>
        <p class="intro-text">our team</p>
        <h2>meet the team</h2>
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

    ScrollReveal().reveal('.reveal', {
      distance: '50px', // Distance the element moves
      duration: 800, // Duration of animation
      easing: 'ease-in-out', // Type of easing
      origin: 'bottom', // Where the animation starts (top, right, bottom, left)
      interval: 100, // Delay between animations
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobileView);
    window.removeEventListener('resize', this.setTopValue);
  },
  methods: {
    checkMobileView() {
      this.isMobileView = window.innerWidth < 992;
    },

    setTopValue() {
      const width = this.$refs.archImage.clientWidth;
      this.topValue = `-${width / 31}px`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
