import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';

const routes = [
  { path: '/', component: Register },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;