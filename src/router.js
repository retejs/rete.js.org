import VueRouter from 'vue-router';
import docsRoute from './components/Docs/route';
import examplesRoute from './components/Examples/route';

const Home = () => import('./components/Home');
const Docs = () => import('./components/Docs');
const Examples = () => import('./components/Examples');
const Components = () => import('./components/Components');
const Issues = () => import('./components/Issues');
const Cli = () => import('./components/Cli');
const Support = () => import('./components/Support');

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/home', redirect: '/' },
    {
      path: '/docs',
      component: Docs,
      children: docsRoute,
      // beforeEnter(){ window.open('https://rete.readthedocs.io')}
    },
    {
      path: '/examples',
      component: Examples,
      children: examplesRoute
    },
    { path: '/components', component: Components },
    { path: '/issues', component: Issues },
    { path: '/cli', component: Cli },
    { path: '/support', component: Support },
  ]
})

export default VueRouter;
export { router };
