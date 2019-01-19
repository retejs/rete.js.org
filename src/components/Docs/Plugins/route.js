import list from './list/index';

export default [
    {
        path: '',
        redirect: list[0].path
    },
    ...list
]