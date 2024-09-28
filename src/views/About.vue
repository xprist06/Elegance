<template>
  <div id="about" class="content-wrapper">
    <section id="title">
      <figure>
        <img src="@/assets/images/about-title.jpg" alt="About title image" />
        <div class="filter"></div>
      </figure>
      <div class="text-content">
        <h1 v-if="!isMobileView">investing in luxury real estates</h1>
        <h2 v-if="isMobileView">investing in luxury real estates</h2>
      </div>
    </section>
    <section id="about-us">
      <div class="container">
        <div class="vertical-delimiter"></div>
        <div id="experience">
          <div>
            <h1>+10</h1>
            <p>YEARS OF EXPERIENCE WITH REDEVELOPMENT</p>
          </div>
          <div>
            <h1>+10</h1>
            <p>PROJECTS CREATED</p>
          </div>
          <div>
            <h1>+32€ MIL</h1>
            <p>SHAREHOLDER'S EQUITY</p>
          </div>
          <div>
            <h1>4</h1>
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
          <p class="intro-text">elegance</p>
          <h2>
            Creating sustainable value and attractive returns for our clients
          </h2>
          <p class="info-text">
            At Elegance, we specialize in developing, acquiring, and managing a
            diverse portfolio of luxury properties. Our focus includes
            small-scale luxury residential projects, transformative
            refurbishments for ultra-high-net-worth individuals, and hospitality
            and mixed-use properties. We offer exclusive access to prime
            residential projects in sought-after locations across Europe, known
            for their scenic views, amenities, and superior infrastructure.
          </p>
        </div>
        <div id="our-job">
          <div class="vertical-delimiter"></div>
          <p class="intro-text">what we do</p>
          <h2>
            <span>developing, acquiring and managing portfolios of</span> luxury
            properties
          </h2>
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
    </section>
    <section id="projects"></section>
    <section id="our-team"></section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      isMobileView: false,
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
    checkMobileView() {
      this.isMobileView = window.innerWidth < 650;
    },
  },
};
</script>

<style lang="scss" scoped></style>
