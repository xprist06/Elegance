<template>
  <elegance-loading @animationFinished="onLoadingFinished" />
  <div id="home" class="content-wrapper">
    <section id="title">
      <v-parallax
        v-if="isTabletView"
        :src="require('@/assets/images/about-title.jpg')"
      >
        <div class="text-content">
          <h1 v-if="!isMobileView">
            <div class="reveal">Invest in</div>
            <div class="reveal">Elegance</div>
          </h1>
          <h2 v-if="isMobileView" class="header-xl">
            <div class="reveal">Invest in</div>
            <div class="reveal">Elegance</div>
          </h2>
          <p class="reveal">
            Developing, acquiring, and managing luxury properties to enhance
            your wealth
          </p>
        </div>
      </v-parallax>
      <figure v-if="!isTabletView">
        <video
          ref="heroVideo"
          :src="require('@/assets/videos/home_title.mp4')"
          playsinline
          muted
          loop
        ></video>
      </figure>
      <figure class="arch">
        <img src="@/assets/images/arches/light-arch.png" />
      </figure>
    </section>
    <section id="for-clients">
      <div class="container">
        <div v-if="!isMobileView" class="vertical-delimiter reveal"></div>
        <p class="intro-text reveal">exceptional real estate opportunities</p>
        <h2 v-if="!isTabletView">
          <div class="reveal"><span>build a legacy</span> with luxury</div>
          <div class="reveal">property investments</div>
        </h2>
        <h2 v-if="isTabletView" class="reveal">
          <div class="reveal"><span>build a legacy</span></div>
          <div class="reveal">with luxury</div>
          <div class="reveal">property investments</div>
        </h2>
        <p class="info-text reveal">
          With Elegance, invest in exceptional luxury living spaces designed and
          developed to meet the desires of ultra-high-net-worth individuals.
          From grand, bespoke residences to refined refurbishments, we bring
          visions of exquisite living to life.
        </p>
        <p class="info-text reveal">
          Beyond development, our expertise extends to acquiring and managing
          premium properties, ensuring your investments flourish with stable,
          long-term returns. We’re here to enrich your lifestyle and secure your
          financial future.
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
        <p class="intro-text reveal">Premier Properties with Enduring Value</p>
        <h2 v-if="!isTabletView">
          <div class="reveal">An exclusive Invitation to</div>
          <div class="reveal">Own the Finest Luxury</div>
          <div class="reveal">Residences</div>
        </h2>
        <h2 v-if="isTabletView">
          <div class="reveal">An exclusive</div>
          <div class="reveal">Invitation to Own</div>
          <div class="reveal">the Finest Luxury</div>
          <div class="reveal">Residences</div>
        </h2>
        <figure class="reveal">
          <img
            src="@/assets/images/homepage-investment.jpg"
            alt="Investment illustration image"
          />
        </figure>
        <div v-if="!isMobileView" class="vertical-delimiter reveal"></div>
        <h2 v-if="!isTabletView" class="w-500">
          <div class="reveal">why invest</div>
          <div class="reveal">in elegance?</div>
        </h2>
        <h1 v-if="isTabletView" class="reveal">
          <div class="reveal">why</div>
          <div class="reveal">invest in</div>
          <div class="reveal">elegance?</div>
        </h1>
        <div class="grid-container">
          <div class="grid-item">
            <h3 class="reveal">A thriving Market</h3>
            <p class="reveal">
              The global demand for luxury properties continues to rise, fueled
              by high-net-worth (1M+ USD) and ultra-high-net-worth individuals
              (30M+ USD). Additionally, a growing number of discerning
              international buyers are seeking exclusive residences, further
              driving demand.
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
              reduce risk while enhancing the overall strength of your
              investment strategy.
            </p>
          </div>
          <div class="grid-item">
            <h3 class="reveal">Lifestyle benefits</h3>
            <p class="reveal">
              The benefits of luxury property ownership extend far beyond
              financial returns. Enjoy these exclusive residences as private
              retreats, elegant vacation homes, and enduring legacy assets,
              providing peace of mind and lasting value for future generations.
            </p>
          </div>
        </div>
      </div>
      <figure class="arch">
        <img src="@/assets/images/arches/light-arch.png" />
      </figure>
    </section>
    <section id="projects">
      <div class="container">
        <div class="vertical-delimiter reveal"></div>
        <p class="intro-text reveal">our most recent projects </p>
        <h2 v-if="!isTabletView">
          <div class="reveal">prestigious Properties in</div>
          <div class="reveal"><span>prime locations</span></div>
        </h2>
        <h2 v-if="isTabletView" class="reveal">
          <div class="reveal">prestigious</div>
          <div class="reveal">Properties in</div>
          <div class="reveal"><span>prime locations</span></div>
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
import { ref, watch } from 'vue';
import ScrollReveal from 'scrollreveal';
import PortfolioItems from '../components/Portfolio.vue';
import EleganceLoading from '@/components/Loading.vue';

export default {
  name: 'HomePage',
  components: {
    PortfolioItems,
    EleganceLoading,
  },
  data() {
    return {
      isMobileView: false,
      isTabletView: false,
      isLoading: true,
    };
  },
  mounted() {
    this.checkMobileView();
    this.checkTabletView();

    this.$nextTick(() => {
      this.reinitializeScrollReveal();
    });

    watch(
      () => this.isLoading,
      (newVal) => {
        if (!newVal) {
          this.playHeroVideo();
        }
      }
    );

    window.addEventListener('resize', this.checkMobileView);
    window.addEventListener('resize', this.checkTabletView);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobileView);
    window.removeEventListener('resize', this.checkTabletView);
  },
  methods: {
    onLoadingFinished() {
      this.isLoading = false;
    },
    checkMobileView() {
      this.isMobileView = window.innerWidth < 650;
    },

    checkTabletView() {
      this.isTabletView = window.innerWidth < 992;
    },

    reinitializeScrollReveal() {
      ScrollReveal().clean('.reveal');
      ScrollReveal().reveal('.reveal', {
        distance: this.isTabletView ? '50px' : '100px',
        duration: 800,
        easing: 'ease-in-out',
        origin: 'bottom',
        interval: 250,
        scale: 0.95,
      });
    },

    playHeroVideo() {
      const videoElement = this.$refs.heroVideo;
      if (videoElement) {
        videoElement.play();
      }
    },
  },
};
</script>
