<template>
  <div id="contact" class="content-wrapper">
    <div class="contact-form">
      <div class="left-side">
        <figure>
          <img src="@/assets/images/contact.jpg" alt="" />
          <div class="filter"></div>
        </figure>
        <div class="content">
          <p>info@elegance.lu</p>
          <p>+352 987 878 987</p>
          <p>26 Boulevard Royal<br />L-2449 Luxembourg</p>
        </div>
      </div>
      <div class="right-side">
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
              rows="6"
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

          <button type="submit">Submit your message</button>
        </form>
      </div>
    </div>
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
    };
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
  },
};
</script>

<style lang="scss" scoped></style>
