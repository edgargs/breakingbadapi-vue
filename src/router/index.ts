import { createRouter, createWebHistory } from "vue-router";

import HomePageVue from '@/shared/pages/HomePage.vue';
import AboutPageVue from '@/shared/pages/AboutPage.vue';

import { characterRoute } from '@/characters/router'

const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL ),
    routes: [
        // Public
        { path: '/', name: 'home', component: HomePageVue},
        { path: '/about', name: 'about', component: AboutPageVue},

        // Characters
        characterRoute,
        //{
        //    path: '/characters',
        //    name: 'characters',
        //    component: () => import('@/characters/layout/CharactersLayout.vue')
        //},

        // Default
        { path: '/:pathMatch(.*)*', redirect: () => ({name: 'home'})}
    ]
});

export default router;