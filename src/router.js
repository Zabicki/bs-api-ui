import { createRouter, createWebHashHistory } from 'vue-router';
import ApiUI from './components/ApiUI.vue';

const routes = [
    { path: '/postgres', component: ApiUI, props: { apiBase: 'http://localhost:8080/postgres' } },
    { path: '/cassandra', component: ApiUI, props: { apiBase: 'http://localhost:8080/cassandra' } },
    { path: '/elasticsearch', component: ApiUI, props: { apiBase: 'http://localhost:8080/elasticsearch' } },
    { path: '/redis', component: ApiUI, props: { apiBase: 'http://localhost:8080/redis' } },
    { path: '/:pathMatch(.*)*', redirect: '/postgres' }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;