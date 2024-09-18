<template>
  <div
    id="clients"
    class="content-wrapper"
    :style="{ height: computedImageHeight + 'px' }"
  >
    <div class="contact-form">
      <div class="left-side">
        <figure>
          <img src="@/assets/images/clients.jpg" alt="" />
        </figure>
      </div>
      <div class="right-side">
        <figure>
          <img src="@/assets/images/logo-without-text.png" alt="Logo" />
        </figure>
        <h3>SIGN IN</h3>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="username">Username:</label>
            <input
              type="email"
              id="username"
              v-model="formData.username"
              placeholder="john.dow@domail.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              v-model="formData.password"
              placeholder="Password"
              required
            />
          </div>

          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientsPage',
  data() {
    return {
      formData: {
        name: '',
        email: '',
      },
    };
  },
  computed: {
    computedImageHeight() {
      const headerHeight = document.querySelector('header')?.offsetHeight ?? 0;
      return window.innerHeight - headerHeight;
    },
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
        };
      } else {
        alert('You must agree with the conditions.');
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
