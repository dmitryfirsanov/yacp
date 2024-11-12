import { createRouter, createWebHistory } from 'vue-router'

import AuthView from '@/views/AuthView.vue';
import MainView from '@/views/MainView.vue';

import LoginPage from '@/modules/Auth/views/LoginPage.vue';
import RegisterPage from '@/modules/Auth/views/RegisterPage.vue';

import CatalogPage from '@/modules/Catalog/views/CatalogPage.vue';
import TaskPage from '@/modules/Catalog/views/TaskPage.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
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
      name: 'main',
      component: MainView,
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
    }
  ],
})

export default router