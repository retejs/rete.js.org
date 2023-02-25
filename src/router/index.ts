import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import docsRoute from '../components/Docs/route';
import examplesRoute from '../components/Examples/route';

const Home = () => import('../components/Home/index.vue');
const Docs = () => import('../components/Docs/index.vue');
const Examples = () => import('../components/Examples/index.vue');
const Components = () => import('../components/Components/index.vue');
const Issues = () => import('../components/Issues/index.vue');
const Cli = () => import('../components/Cli/index.vue');
const Support = () => import('../components/Support/index.vue');

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/home', redirect: '/' },
  {
    path: '/docs',
    component: Docs,
    children: docsRoute,
  },
  {
    path: '/examples',
    component: Examples,
    children: examplesRoute,
  },
  { path: '/components', component: Components },
  { path: '/issues', component: Issues },
  { path: '/cli', component: Cli },
  { path: '/support', component: Support },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
