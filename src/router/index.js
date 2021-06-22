import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Favorites from '../pages/Favorites.vue';
import Beans from '../pages/Beans.vue';
import Methods from '../pages/Methods.vue';
import MethodSteps from '../pages/MethodSteps.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favorites', name: 'Favorites', component: Favorites },
  { path: '/beans', name: 'Beans', component: Beans },
  { path: '/methods/:beanId', name: 'Methods', component: Methods, props: true },
  { path: '/methodsteps/:beanId/:methodId', name: 'MethodSteps', component: MethodSteps, props: true}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  
})

export default router
