import { createRouter, createWebHistory } from 'vue-router';

const routerHistory = createWebHistory();

import HomePage from '@/pages/home.vue';
import AboutPage from '@/pages/about.vue';
import VacancyPage from '@/pages/vacancy.vue';
import NotFoundPage from '@/pages/404.vue';
import Item from '@/pages/_itemAlias.vue';

const router = createRouter({
	history: routerHistory,
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage,
		},
		{
			path: '/about',
			name: 'about',
			component: AboutPage,
		},
		{
			path: '/vacancy',
			name: 'vacancy',
			component: VacancyPage,
		},
		{
			path: '/:itemAlias',
			name: 'itemAlias',
			component: Item,
		},
		{
			// path: '/:PathMatch(.*)*',
			path: '/:CatchAll(.*)',
			name: '404',
			component: NotFoundPage,
		},
	],
});

export default router;
