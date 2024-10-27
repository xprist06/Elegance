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
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash, // Scrolls to the element with the ID matching the hash
        behavior: 'smooth', // Optional: smooth scrolling
      };
      // } else if (savedPosition) {
      //   return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
