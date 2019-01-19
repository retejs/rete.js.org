import pluginsRoute from './Plugins/route';

const Main = () => import('./Main/index.vue');
const Editor = () => import('./Editor/index.vue');
const Engine = () => import('./Engine/index.vue');
const Components = () => import('./Components/index.vue');
const Nodes = () => import('./Nodes/index.vue');
const Sockets = () => import('./Sockets/index.vue');
const Controls = () => import('./Controls/index.vue');
const Events = () => import('./Events/index.vue');
const Plugins = () => import('./Plugins/index.vue');

export default [
    {
        path: '',
        component: Main
    },
    {
        path: 'editor',
        component: Editor
    },
    {
        path: 'engine',
        component: Engine
    },
    {
        path: 'components',
        component: Components
    },
    {
        path: 'nodes',
        component: Nodes
    },
    {
        path: 'sockets',
        component: Sockets
    },
    {
        path: 'controls',
        component: Controls
    },
    {
        path: 'events',
        component: Events
    },
    {
        path: 'plugins',
        component: Plugins,
        children: pluginsRoute
    },
    {
        path: '*',
        redirect: '.'
    }
]