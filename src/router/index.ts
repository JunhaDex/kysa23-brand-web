import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/pages/HomeView.vue';
import GuideView from '@/pages/GuideView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/guide',
      name: 'guide',
      component: GuideView,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/pages/RegisterView.vue'),
    },
    {
      path: '/group',
      name: 'group',
      component: () => import('@/pages/GroupView.vue'),
    },
  ],
});

export default router;
