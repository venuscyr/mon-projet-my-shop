import { createRouter, createWebHistory } from "vue-router";


import HomeView from '@/components/HomeView.vue';
import AdminView from '@/components/AdminView.vue';
import CartView from '@/components/CartView.vue';
import LoginRegisterView from '@/components/LoginRegisterView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView,
  },
  {
    path: '/login',
    name: 'LoginRegister',
    component: LoginRegisterView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
