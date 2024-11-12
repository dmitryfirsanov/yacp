import { createRouter, createWebHistory } from 'vue-router'

import AuthLayout from '@/views/AuthLayout.vue';
import MainLayout from '@/views/MainLayout.vue';

import NotFoundPage from '@/views/NotFoundPage.vue'

import LoginPage from '@/modules/Auth/views/LoginPage.vue';
import RegisterPage from '@/modules/Auth/views/RegisterPage.vue';

import CatalogPage from '@/modules/Catalog/views/CatalogPage.vue';
import TaskPage from '@/modules/Catalog/views/TaskPage.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/auth',
      name: 'AuthPage',
      component: AuthLayout,
      children: [
        {
          path: '/auth/login',
          name: 'LoginPage',
          component: LoginPage,
        },
        {
          path: '/auth/register',
          name: 'RegisterPage',
          component: RegisterPage,
        }
      ],
    },
    {
      path: '/',
      name: 'MainPage',
      component: MainLayout,
      redirect: { name: 'CatalogPage' },
      children: [
        {
          path: '/catalog',
          name: 'CatalogPage',
          component: CatalogPage,
        },
        {
          path: '/task/:id',
          name: 'TaskPage',
          component: TaskPage,
          props: true,
        }
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
  ],
})

export default router