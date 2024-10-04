<template>
  <div id="home" class="content-wrapper">
    <section id="title">
      <figure>
        <img
          src="@/assets/images/homepage-title.jpg"
          alt="Homepage title image"
        />
        <div class="filter"></div>
      </figure>
      <div class="text-content">
        <h1 v-if="!isMobileView">Invest in Elegance</h1>
        <h2 v-if="isMobileView">Invest in Elegance</h2>
        <p>
          Dedicated to Developing, Acquiring, and Managing a Diversified
          Portfolio of Luxury Properties
        </p>
      </div>
    </section>
    <section id="for-clients">
      <div class="container">
        <div v-if="!isMobileView" class="vertical-delimiter"></div>
        <p class="intro-text">for our clients</p>
        <h2>
          <span>Attractive returns</span> by capitalising unique market
          opportunities
        </h2>
        <p class="info-text">
          At Elegance, we primarily focus on value creation through the
          development of small-scale luxury residential projects and
          transformative refurbishments tailored for ultra-high-net-worth
          individuals. Additionally, we enhance stable cash flow by acquiring
          and managing various properties, ensuring a balanced approach to
          luxury real estate investment.
        </p>
        <figure>
          <img
            src="@/assets/images/homepage-for-clients.jpg"
            alt="For clients illustration image"
          />
        </figure>
      </div>
    </section>
    <section id="investment">
      <div class="container">
        <div v-if="!isMobileView" class="vertical-delimiter"></div>
        <p class="intro-text">for our clients</p>
        <h2>Exclusive access to purchase premier residential projects</h2>
        <figure>
          <img
            src="@/assets/images/homepage-investment.jpg"
            alt="Investment illustration image"
          />
        </figure>
        <div v-if="!isMobileView" class="vertical-delimiter"></div>
        <h2 v-if="!isTabletView">why to invest in elegance</h2>
        <h1 v-if="isTabletView">why to invest in elegance</h1>
        <div class="grid-container">
          <div class="grid-item">
            <h3>Growing Market</h3>
            <p>
              The global demand for luxury properties continues to rise, driven
              by high-net-worth individuals (1M+ USD) and ultra-high-net-worth
              individuals (30M+ USD), as well as international buyers.
            </p>
          </div>
          <div class="grid-item">
            <h3>Stability</h3>
            <p>
              Historically, luxury real estate has shown resilience to market
              downturns and has offered attractive returns. Prime locations tend
              to experience steady appreciation in property values.
            </p>
          </div>
          <div class="grid-item">
            <h3>Risk diversification</h3>
            <p>
              Luxury properties have historically demonstrated low correlation
              with traditional asset classes such as stocks and bonds, making
              them a valuable addition to investment portfolios.
            </p>
          </div>
          <div class="grid-item">
            <h3>Lifestyle benefits</h3>
            <p>
              Ownership of luxury properties offers lifestyle perks, prestige,
              and personal enjoyment. Luxury properties can serve as private
              retreats, vacation homes, or legacy assets for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="projects">
      <div class="container">
        <div class="vertical-delimiter"></div>
        <p class="intro-text">our most recent projects </p>
        <h2>unique Properties with <span>prime locations</span></h2>
        <div class="btn-wrapper">
          <button class="light">see more properties</button>
        </div>
        <portfolio-items></portfolio-items>
      </div>
    </section>
  </div>
</template>

<script>
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
    };
  },
  mounted() {
    this.checkMobileView();
    this.checkTabletView();

    window.addEventListener('resize', this.checkMobileView);
    window.addEventListener('resize', this.checkTabletView);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobileView);
    window.removeEventListener('resize', this.checkTabletView);
  },
  methods: {
    checkMobileView() {
      this.isMobileView = window.innerWidth < 650;
    },

    checkTabletView() {
      this.isTabletView = window.innerWidth < 992;
    },
  },
};
</script>
