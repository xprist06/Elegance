<template>
  <div id="home" class="content-wrapper">
    <section id="title">
      <v-parallax :src="require('@/assets/images/homepage-title.jpg')">
        <!-- <figure>
          <img
            src="@/assets/images/homepage-title.jpg"
            alt="Homepage title image"
          />
        </figure> -->
        <div class="text-content">
          <h1 v-if="!isMobileView" class="reveal">Invest in Elegance</h1>
          <h2 v-if="isMobileView" class="reveal header-xl">
            Invest in Elegance
          </h2>
          <p class="reveal">
            Dedicated to Developing, Acquiring, and Managinga Diversified
            Portfolio of Luxury Properties
          </p>
        </div>
      </v-parallax>
    </section>
    <section id="for-clients">
      <figure class="arch golden" :style="{ '--top-value': topValue }">
        <img
          src="@/assets/images/arches/golden-arch.svg"
          ref="archImage"
          @load="setTopValue"
        />
      </figure>
      <div class="container">
        <div v-if="!isMobileView" class="vertical-delimiter reveal"></div>
        <p class="intro-text reveal">for our clients</p>
        <h2 class="reveal">
          <span>build a legacy</span> with luxury property investments
        </h2>
        <p class="info-text reveal">
          With Elegance, invest in exceptional luxury living spaces designed and
          developed to meet the desires of ultra-high-net-worth individuals.
          From bespoke luxury residences to transformative refurbishments, we
          bring visions of refined living to life.
        </p>
        <p class="info-text reveal">
          Beyond development, our expertise extends to acquiring and managing
          premium properties, ensuring your investments flourish with stable,
          long-term returns. We’re here to elevate your lifestyle and secure
          your financial future.
        </p>
        <figure>
          <img
            class="reveal"
            src="@/assets/images/homepage-for-clients.jpg"
            alt="For clients illustration image"
          />
        </figure>
      </div>
    </section>
    <figure class="arch">
      <img src="@/assets/images/arches/green-arch.png" />
    </figure>
    <section id="investment">
      <div class="container">
        <div v-if="!isMobileView" class="vertical-delimiter reveal"></div>
        <p class="intro-text reveal">for our clients</p>
        <h2 class="reveal">
          An exclusive Invitation to Own the Finest Luxury Residences
        </h2>
        <figure class="reveal">
          <img
            src="@/assets/images/homepage-investment.jpg"
            alt="Investment illustration image"
          />
        </figure>
        <div v-if="!isMobileView" class="vertical-delimiter reveal"></div>
        <h2 v-if="!isTabletView" class="w-500 reveal">
          why invest in elegance?
        </h2>
        <h1 v-if="isTabletView" class="reveal">why invest in elegance?</h1>
        <div class="grid-container">
          <div class="grid-item">
            <h3 class="reveal">A thriving Market</h3>
            <p class="reveal">
              The global demand for luxury properties continues to rise, driven
              by high-net-worth individuals (1M+ USD) and ultra-high-net-worth
              individuals (30M+ USD), alongside a growing number of discerning
              international buyers seeking exclusive residences.
            </p>
          </div>
          <div class="grid-item">
            <h3 class="reveal">enduring Stability</h3>
            <p class="reveal">
              Luxury real estate has consistently proven resilience during
              market fluctuations, offering attractive returns even during
              uncertain periods. Properties in prime locations continue to
              appreciate steadily, making them a reliable cornerstone of wealth
              preservation and growth.
            </p>
          </div>
          <div class="grid-item">
            <h3 class="reveal">Risk diversification</h3>
            <p class="reveal">
              Luxury properties provide diversification advantages within a
              well-balanced investment portfolio. With their low correlation to
              traditional asset classes such as stocks and bonds, they help
              mitigate risk while enhancing the overall strength of your
              investment strategy.
            </p>
          </div>
          <div class="grid-item">
            <h3 class="reveal">Lifestyle benefits</h3>
            <p class="reveal">
              Luxury property ownership extends far beyond financial returns.
              Enjoy these exclusive residences as private retreats, elegant
              vacation homes, and enduring legacy assets, providing peace of
              mind and lasting value for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
    <figure class="arch">
      <img src="@/assets/images/arches/green-arch-xl.png" />
    </figure>
    <section id="projects">
      <div class="container">
        <div class="vertical-delimiter reveal"></div>
        <p class="intro-text reveal">our most recent projects </p>
        <h2 class="reveal">
          prestigious Properties in <span>prime locations</span>
        </h2>
        <div class="btn-wrapper">
          <router-link to="/about#projects">
            <button class="light reveal">see more properties</button>
          </router-link>
        </div>
        <portfolio-items></portfolio-items>
      </div>
    </section>
  </div>
  <figure class="arch">
    <img src="@/assets/images/arches/green-arch.png" />
  </figure>
</template>

<script>
import ScrollReveal from 'scrollreveal';
import PortfolioItems from '../components/Portfolio.vue';

export default {
  name: 'HomePage',
  components: {
    PortfolioItems,
  },
  data() {
    return {
      isMobileView: false,
      isTabletView: false,
      topValue: '0px',
    };
  },
  mounted() {
    this.checkMobileView();
    this.checkTabletView();

    this.$nextTick(() => {
      this.reinitializeScrollReveal();
    });

    window.addEventListener('resize', this.checkMobileView);
    window.addEventListener('resize', this.checkTabletView);
    window.addEventListener('resize', this.setTopValue);

    // ScrollReveal().reveal('.reveal', {
    //   distance: '50px', // Distance the element moves
    //   duration: 800, // Duration of animation
    //   easing: 'ease-in-out', // Type of easing
    //   origin: 'bottom', // Where the animation starts (top, right, bottom, left)
    //   interval: 100, // Delay between animations
    // });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobileView);
    window.removeEventListener('resize', this.checkTabletView);
    window.removeEventListener('resize', this.setTopValue);
  },
  methods: {
    checkMobileView() {
      this.isMobileView = window.innerWidth < 650;
    },

    checkTabletView() {
      this.isTabletView = window.innerWidth < 992;
    },

    setTopValue() {
      const width = this.$refs.archImage.clientWidth;
      this.topValue = `-${width / 30}px`;
    },

    reinitializeScrollReveal() {
      ScrollReveal().clean('.reveal');
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
