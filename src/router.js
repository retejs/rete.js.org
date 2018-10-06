import VueRouter from 'vue-router';
import examplesRoute from './components/Examples/route';

const Home = () => import('./components/Home');
const Examples = () => import('./components/Examples');
const Components = () => import('./components/Components');
const Cli = () => import('./components/Cli');
const Support = () => import('./components/Support');

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/home', redirect: '/' },
    { path: '/docs', beforeEnter(){ window.open('https://rete.readthedocs.io')} },
    {
      path: '/examples',
      component: Examples,
      children: examplesRoute
    },
    { path: '/components', component: Components},
    { path: '/cli', component: Cli},
    { path: '/support', component: Support },
  ]
})

export default VueRouter;
export { router };
