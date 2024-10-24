<template>
  <div id="contact" class="content-wrapper">
    <div class="contact-form">
      <div class="left-side">
        <v-parallax :src="require('@/assets/images/contact.jpg')">
          <figure>
            <!-- <img src="@/assets/images/contact.jpg" alt="" /> -->
            <div class="filter"></div>
          </figure>
          <div class="content">
            <p><a href="mailto:info@elegance.lu">info@elegance.lu</a></p>
            <p><a href="tel:+352987878987">+352 987 878 987</a></p>
            <p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=26+Boulevard+Royal,+L-2449+Luxembourg"
                target="_blank"
              >
                26 Boulevard Royal<br />L-2449 Luxembourg
              </a>
            </p>
          </div>
        </v-parallax>
      </div>
      <div class="right-side">
        <figure class="arch golden" :style="{ '--top-value': topValue }">
          <img
            src="@/assets/images/arches/golden-arch.svg"
            ref="archImage"
            @load="setTopValue"
          />
        </figure>
        <h2>Get in touch</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <input
              type="text"
              v-model="formData.name"
              placeholder="Name*"
              required
            />
          </div>

          <div class="form-group">
            <input
              type="email"
              v-model="formData.email"
              placeholder="Email*"
              required
            />
          </div>

          <div class="form-group">
            <input
              type="tel"
              v-model="formData.phone"
              placeholder="Phone Number"
            />
          </div>

          <div class="form-group">
            <textarea
              v-model="formData.message"
              rows="2"
              placeholder="Message*"
              required
            ></textarea>
          </div>

          <div class="form-group checkbox">
            <label>
              <input type="checkbox" v-model="formData.agree" required />
              *I agree that by submitting this form, I accept your website terms
              of use, privacy notice and cookie policy.
            </label>
          </div>

          <button type="submit" class="dark">Submit your message</button>
        </form>
      </div>
    </div>
    <figure class="arch">
      <img src="@/assets/images/arches/green-arch.png" />
    </figure>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: '',
        agree: false,
      },
      topValue: '0px',
    };
  },
  mounted() {
    window.addEventListener('resize', this.setTopValue);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.setTopValue);
  },
  methods: {
    handleSubmit() {
      if (this.formData.agree) {
        alert('Form submitted successfully!');
        console.log(this.formData);
        // Reset form
        this.formData = {
          name: '',
          email: '',
          phone: '',
          message: '',
          agree: false,
        };
      } else {
        alert('You must agree with the conditions.');
      }
    },
    setTopValue() {
      const width = this.$refs.archImage.clientWidth;
      this.topValue = `-${width / 30}px`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
