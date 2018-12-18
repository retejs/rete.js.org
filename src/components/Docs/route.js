const Main = () => import('./Main/index.vue');
const Editor = () => import('./Editor/index.vue');

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
        path: '*',
        redirect: '.'
    }
]