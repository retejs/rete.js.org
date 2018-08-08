import VueRouter from 'vue-router';
import Home from './components/Home';
import Examples from './components/Examples';
import Components from './components/Components';
import Donate from './components/Donate';

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/home', redirect: '/' },
    { path: '/docs', beforeEnter(){ window.open('https://rete.readthedocs.io')} },
    { path: '/examples', component: Examples },
    { path: '/components', component: Components},
    { path: '/donate', component: Donate },
  ]
})

export default VueRouter;
export { router };
