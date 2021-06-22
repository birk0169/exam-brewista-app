import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Favorites from '../pages/Favorites.vue';
import Beans from '../pages/Beans.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favorites', name: 'Favorites', component: Favorites },
  { path: '/Beans', name: 'Beans', component: Beans },
  // { path: '/Methods:beanId', name: 'Methods', component: Beans, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
