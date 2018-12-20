const Main = () => import('./Main/index.vue');
const Editor = () => import('./Editor/index.vue');
const Engine = () => import('./Engine/index.vue');
const Components = () => import('./Components/index.vue');

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
        path: '*',
        redirect: '.'
    }
]