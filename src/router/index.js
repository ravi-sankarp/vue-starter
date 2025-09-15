import Config from '../config.js';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/User/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Introlines - Cargo Service' },
      component: HomeView
    },
    {
      path: '/admin',
      name: 'Admin-landing',
      component: () => import('../views/Admin/index.vue'),
      beforeEnter: (to) => {
        const path = to.fullPath;
        const token = localStorage.getItem(Config.localstorageKeys.ADMIN_TOKEN);
        if (!path.includes('login')) {
          if (!token) {
            return '/admin/login';
          }
        }
        if (path.includes('login')) {
          if (token) {
            return '/admin/cargo';
          }
        }
        return true;
      },
      children: [
        {
          path: 'login',
          name: 'Admin-login',
          meta: { title: 'Login | Introlines' },
          component: () => import('../views/Admin/Login/index.vue')
        },
        {
          path: 'dashboard',
          name: 'Admin-Dashboard',
          meta: { title: 'Dashboard | Introlines' },
          component: () => import('../views/Admin/Dashboard/index.vue')
        },
        {
          path: 'cargo',
          name: 'Admin-Cargo',
          meta: { title: 'Cargo Details | Introlines' },
          component: () => import('../views/Admin/Cargo/index.vue')
        },
        {
          path: 'shipments',
          name: 'Admin-Shipments',
          meta: { title: 'Shipment Details | Introlines' },
          component: () => import('../views/Admin/Shipments/index.vue')
        },
        {
          path: 'employees',
          name: 'Admin-Employees',
          meta: { title: 'Employee Details | Introlines' },
          component: () => import('../views/Admin/Employees/index.vue')
        },
        {
          path: 'profile',
          name: 'Admin-Profile',
          meta: { title: 'Profile | Introlines' },
          component: () => import('../views/Admin/Profile/index.vue')
        },
        {
          path: 'settings',
          name: 'Admin-Settings',
          meta: { title: 'Admin Settings | Introlines' },
          component: () => import('../views/Admin/Settings/index.vue')
        }
      ]
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
    document.title = 'Introlines - Cargo Service';
  }
  next();
});
export default router;
