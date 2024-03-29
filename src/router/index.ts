import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/pages/HomeView.vue';
import GuideView from '@/pages/GuideView.vue';
import InfoView from '@/pages/InfoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/event',
      name: 'Event',
      component: () => import('@/pages/EventView.vue'),
    },
    {
      path: '/info',
      name: 'Info',
      component: InfoView,
    },
    {
      path: '/guide',
      name: 'guide',
      component: GuideView,
    },
    {
      path: '/group',
      name: 'group',
      component: () => import('@/pages/GroupView.vue'),
    },
  ],
});

export default router;
