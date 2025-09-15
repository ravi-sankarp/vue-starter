import Config from '../config.js';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/User/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: '' },
      component: HomeView
    },
    {
      path: '/admin',
      name: 'Admin-landing',
      component: () => import('../views/Admin/index.vue'),
      beforeEnter: (to) => {
        // const path = to.fullPath;
        // const token = localStorage.getItem(Config.localstorageKeys.ADMIN_TOKEN);
        // if (!path.includes('login')) {
        //   if (!token) {
        //     return '/admin/login';
        //   }
        // }
        // if (path.includes('login')) {
        //   if (token) {
        //     return '/admin/cargo';
        //   }
        // }
        return true;
      },
      children: []
    },
    {
      path: '/:notfound',
      name: 'NotFound',
      meta: { title: '404 Not Found' },
      component: () => import('../views/404.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  const title = to.meta.title;
  if (title) {
    document.title = title;
  } else {
    document.title = '';
  }
  next();
});
export default router;
