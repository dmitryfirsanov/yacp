import { createRouter, createWebHistory } from 'vue-router'

import AuthLayout from '@/core/views/AuthLayout.vue'
import MainLayout from '@/core/views/MainLayout.vue'

import NotFoundPage from '@/core/views/NotFoundPage.vue'

import LoginPage from '@/modules/Auth/views/LoginPage.vue'
import RegisterPage from '@/modules/Auth/views/RegisterPage.vue'

import ProfilePage from '@/modules/Profile/views/ProfileViewPage.vue'

import TaskListPage from '@/modules/Task/views/TaskListPage.vue'
import TaskViewPage from '@/modules/Task/views/TaskViewPage.vue'
import TaskCreatePage from '@/modules/Task/views/TaskCreatePage.vue'
import TaskEditPage from '@/modules/Task/views/TaskEditPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/auth',
            name: 'AuthPage',
            component: AuthLayout,
            children: [
                {
                    path: 'login',
                    name: 'LoginPage',
                    component: LoginPage,
                },
                {
                    path: 'register',
                    name: 'RegisterPage',
                    component: RegisterPage,
                },
            ],
        },
        {
            path: '/',
            name: 'MainPage',
            component: MainLayout,
            redirect: { name: 'TaskListPage' },
            children: [
                {
                    path: 'catalog',
                    name: 'TaskListPage',
                    component: TaskListPage,
                },
                {
                    path: '/task/:id',
                    name: 'TaskViewPage',
                    component: TaskViewPage,
                    props: true,
                },
                {
                    path: '/task/create',
                    name: 'TaskCreatePage',
                    component: TaskCreatePage,
                    props: true,
                },
                {
                    path: '/task/:id/edit',
                    name: 'TaskEditPage',
                    component: TaskEditPage,
                    props: true,
                },
                {
                    path: 'profile',
                    name: 'ProfilePage',
                    component: ProfilePage,
                    props: true,
                },
            ],
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
    ],
})

export default router
