import basic from './basic';
import readonly from './readonly';
import area from './area';
import module from './module';
import task from './task';
import customization from './customization';

export default [
    {
        key: 'basic',
        init: basic,
        packages: [
            'rete',
            'rete-connection-plugin',
            'rete-alight-render-plugin',
            'rete-context-menu-plugin'
        ]
    },
    {
        key: 'readonly',
        init: readonly,
        packages: [
            'rete',
            'rete-connection-plugin',
            'rete-alight-render-plugin',
            'rete-readonly-plugin'
        ]
    },
    {
        key: 'area',
        init: area,
        packages: [
            'rete',
            'rete-connection-plugin',
            'rete-alight-render-plugin',
            'rete-area-plugin'
        ]
    },
    {
        key: 'module',
        init: module,
        packages: [
            'rete',
            'rete-connection-plugin',
            'rete-alight-render-plugin',
            'rete-module-plugin'
        ]
    },
    {
        key: 'task',
        init: task,
        packages: [
            'rete',
            'rete-connection-plugin',
            'rete-alight-render-plugin',
            'rete-task-plugin'
        ]
    },
    {
        key: 'customization',
        init: customization,
        packages: [
            'rete',
            'rete-connection-plugin',
            'rete-alight-render-plugin'
        ]
    },
]