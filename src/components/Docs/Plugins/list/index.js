const meta = routes => routes.map(r => {
  r.meta = {
    ...(r.meta || {}),
    name: r.path
  };

  return r;
});

export default meta([
  {
    path:  'connection',
    component: () => import('./Connection.vue')
  },
  {
    path:  'vue-render',
    component: () => import('./VueRender.vue')
  },
  {
    path:  'react-render',
    component: () => import('./ReactRender.vue')
  },
  {
    path:  'stage0-render',
    component: () => import('./Stage0Render.vue')
  },
  {
    path:  'context-menu',
    component: () => import('./ContextMenu.vue')
  },
  {
    path:  'stage0-menu',
    component: () => import('./Stage0Menu.vue')
  },
  {
    path:  'keyboard',
    component: () => import('./Keyboard.vue')
  },
  {
    path:  'area',
    component: () => import('./Area.vue')
  },
  {
    path:  'module',
    component: () => import('./Module.vue')
  },
  {
    path:  'profiler',
    component: () => import('./Profiler.vue')
  },
  {
    path:  'readonly',
    component: () => import('./Readonly.vue')
  },
  {
    path:  'task',
    component: () => import('./Task.vue')
  },
  {
    path:  'code',
    component: () => import('./Code.vue')
  },
  {
    path:  'comment',
    component: () => import('./Comment.vue')
  },
  {
    path:  'minimap',
    component: () => import('./Minimap.vue')
  },
  {
    path:  'connection-path',
    component: () => import('./ConnectionPath.vue')
  },
  {
    path:  'connection-reroute',
    component: () => import('./ConnectionReroute.vue')
  },
  {
    path:  'auto-arrange',
    component: () => import('./AutoArrange.vue')
  },
  {
    path:  'lifecycle',
    component: () => import('./LifeCycle.vue')
  },
  {
    path:  'linter',
    component: () => import('./Linter.vue')
  },
  {
    path: 'history',
    component: () => import('./History.vue')
  },
  {
    path: 'dock',
    component: () => import('./Dock.vue')
  }
]);