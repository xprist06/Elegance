import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import AboutPage from '../views/About.vue';
import ContactPage from '../views/Contact.vue';
import ClientsPage from '../views/Clients.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage,
  },
  {
    path: '/clients',
    name: 'ClientsPage',
    component: ClientsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
