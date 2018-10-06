import list from './list';
const Example = () => import('./Example.vue');

export default [
    {
        path: '',
        redirect: list[0].key
    },
    ...list.map(item => {
        return {
            path: item.key,
            component: Example,
            props: { item }
        }
    })
]