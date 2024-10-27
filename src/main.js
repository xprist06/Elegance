import { createApp } from 'vue';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import App from './App.vue';
import router from './router';
import './assets/scss/main.scss';

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(vuetify).use(router).mount('#app');
