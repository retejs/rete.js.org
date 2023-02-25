import basic from './basic';
import readonly from './readonly';
import area from './area';
import module from './module';
import task from './task';
import customization from './customization';
import reroute from './reroute';
import dock from './dock';
import minimap from './minimap';

export default [
  {
    key: 'basic',
    init: basic,
    packages: [
      'rete',
      'rete-connection-plugin',
      'rete-vue-render-plugin',
      'rete-context-menu-plugin',
    ],
  },
  {
    key: 'readonly',
    init: readonly,
    packages: [
      'rete',
      'rete-connection-plugin',
      'rete-vue-render-plugin',
      'rete-readonly-plugin',
    ],
  },
  {
    key: 'area',
    init: area,
    packages: [
      'rete',
      'rete-connection-plugin',
      'rete-vue-render-plugin',
      'rete-area-plugin',
    ],
  },
  {
    key: 'module',
    init: module,
    packages: [
      'rete',
      'rete-connection-plugin',
      'rete-vue-render-plugin',
      'rete-module-plugin',
    ],
  },
  {
    key: 'task',
    init: task,
    packages: [
      'rete',
      'rete-connection-plugin',
      'rete-vue-render-plugin',
      'rete-task-plugin',
    ],
  },
  {
    key: 'customization',
    init: customization,
    packages: [
      'rete',
      'rete-connection-plugin',
      'rete-vue-render-plugin',
    ],
  },
  {
    key: 'reroute',
    init: reroute,
    packages: [
      'rete',
      'rete-connection-plugin',
      'rete-vue-render-plugin',
      'rete-connection-reroute-plugin',
    ],
  },
  {
    key: 'dock',
    init: dock,
    packages: [
      'rete',
      'rete-connection-plugin',
      'rete-vue-render-plugin',
      'rete-dock-plugin',
    ],
  },
  {
    key: 'minimap',
    init: minimap,
    packages: [
      'rete',
      'rete-connection-plugin',
      'rete-vue-render-plugin',
      'rete-minimap-plugin',
    ],
  },
];
