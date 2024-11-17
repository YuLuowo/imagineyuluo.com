import { createRouter, createWebHistory } from 'vue-router';

import Home from '../app/HomePage.vue';
import News from '../app/NewsPage.vue';
import About from '../app/AboutPage.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/news', name: 'News', component: News },
    { path: '/about', name: 'About', component: About },
    { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
