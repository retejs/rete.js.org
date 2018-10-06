import list from './list';
const Example = () => import('./Example.vue');

export default [
    {
        path: '',
        redirect: list[0].key
    },
    {
        path: ':key',
        component: Example
    }
]