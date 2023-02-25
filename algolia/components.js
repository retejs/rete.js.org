import Main from './src/components/Docs/Main/index.vue';
import Editor from './src/components/Docs/Editor/index.vue';
import Engine from './src/components/Docs/Engine/index.vue';
import Components from './src/components/Docs/Components/index.vue';
import Nodes from './src/components/Docs/Nodes/index.vue';
import Sockets from './src/components/Docs/Sockets/index.vue';
import Controls from './src/components/Docs/Controls/index.vue';
import Events from './src/components/Docs/Events/index.vue';

import AreaPlugin from './src/components/Docs/Plugins/list/Area.vue';
import AutoArrangePlugin from './src/components/Docs/Plugins/list/AutoArrange.vue';
import CodePlugin from './src/components/Docs/Plugins/list/Code.vue';
import CommentPlugin from './src/components/Docs/Plugins/list/Comment.vue';
import ConnectionPlugin from './src/components/Docs/Plugins/list/Connection.vue';
import ConnectionPathPlugin from './src/components/Docs/Plugins/list/ConnectionPath.vue';
import ConnectionReroutePlugin from './src/components/Docs/Plugins/list/ConnectionReroute.vue';
import ContextMenuPlugin from './src/components/Docs/Plugins/list/ContextMenu.vue';
import DockPlugin from './src/components/Docs/Plugins/list/Dock.vue';
import HistoryPlugin from './src/components/Docs/Plugins/list/History.vue';
import KeyboardPlugin from './src/components/Docs/Plugins/list/Keyboard.vue';
import LifeCyclePlugin from './src/components/Docs/Plugins/list/LifeCycle.vue';
import LinterPlugin from './src/components/Docs/Plugins/list/Linter.vue';
import MinimapPlugin from './src/components/Docs/Plugins/list/Minimap.vue';
import ModulePlugin from './src/components/Docs/Plugins/list/Module.vue';
import ProfilerPlugin from './src/components/Docs/Plugins/list/Profiler.vue';
import ReactRenderPlugin from './src/components/Docs/Plugins/list/ReactRender.vue';
import ReadonlyPlugin from './src/components/Docs/Plugins/list/Readonly.vue';
import Stage0MenuPlugin from './src/components/Docs/Plugins/list/Stage0Menu.vue';
import Stage0RenderPlugin from './src/components/Docs/Plugins/list/Stage0Render.vue';
import TaskPlugin from './src/components/Docs/Plugins/list/Task.vue';
import VueRenderPlugin from './src/components/Docs/Plugins/list/VueRender.vue';

import ExampleInfo from './src/components/Examples/Info.vue';

export default [
  { component: Main, path: '/docs' },
  { component: Editor, path: '/docs/editor' },
  { component: Engine, path: '/docs/engine' },
  { component: Components, path: '/docs/components' },
  { component: Nodes, path: '/docs/nodes' },
  { component: Sockets, path: '/docs/sockets' },
  { component: Controls, path: '/docs/controls' },
  { component: Events, path: '/docs/events' },
  { component: AreaPlugin, path: '/docs/plugins/area' },
  { component: AutoArrangePlugin, path: '/docs/plugins/auto-arrange' },
  { component: CodePlugin, path: '/docs/plugins/code' },
  { component: CommentPlugin, path: '/docs/plugins/comment' },
  { component: ConnectionPlugin, path: '/docs/plugins/connection' },
  { component: ConnectionPathPlugin, path: '/docs/plugins/connection-path' },
  { component: ConnectionReroutePlugin, path: '/docs/plugins/connection-reroute' },
  { component: ContextMenuPlugin, path: '/docs/plugins/context-menu' },
  { component: DockPlugin, path: '/docs/plugins/dock' },
  { component: HistoryPlugin, path: '/docs/plugins/history' },
  { component: KeyboardPlugin, path: '/docs/plugins/keyboard' },
  { component: LifeCyclePlugin, path: '/docs/plugins/life-cycle' },
  { component: LinterPlugin, path: '/docs/plugins/linter' },
  { component: MinimapPlugin, path: '/docs/plugins/minimap' },
  { component: ModulePlugin, path: '/docs/plugins/module' },
  { component: ProfilerPlugin, path: '/docs/plugins/profiler' },
  { component: ReactRenderPlugin, path: '/docs/plugins/react-render/react-render' },
  { component: ReadonlyPlugin, path: '/docs/plugins/readonly/readonly' },
  { component: Stage0MenuPlugin, path: '/docs/plugins/stage0-menu/stage0-menu' },
  { component: Stage0RenderPlugin, path: '/docs/plugins/stage0-render/stage0-render' },
  { component: TaskPlugin, path: '/docs/plugins/task' },
  { component: VueRenderPlugin, path: '/docs/plugins/vue-render' },
  ...['basic', 'readonly', 'area', 'module', 'task', 'customization', 'reroute', 'dock'].map((key) => ({ component: ExampleInfo, path: `/examples/${key}`, props: { item: { key } } })),
];
