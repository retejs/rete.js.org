import Main from './src/components/Docs/Main/index.vue'
import Editor from './src/components/Docs/Editor/index.vue'
import Engine from './src/components/Docs/Engine/index.vue'
import Components from './src/components/Docs/Components/index.vue'
import Nodes from './src/components/Docs/Nodes/index.vue'
import Sockets from './src/components/Docs/Sockets/index.vue'
import Controls from './src/components/Docs/Controls/index.vue'
import Events from './src/components/Docs/Events/index.vue'
// import Plugins from './src/components/Docs/Plugins/index.vue'

export default [
    { component: Main, path: '/docs' },
    { component: Editor, path: '/docs/editor' },
    { component: Engine, path: '/docs/engine' },
    { component: Components, path: '/docs/components' },
    { component: Nodes, path: '/docs/nodes' },
    { component: Sockets, path: '/docs/sockets' },
    { component: Controls, path: '/docs/controls' },
    { component: Events, path: '/docs/events' },
    // { component: Plugins, path: '/docs/plugins' }
]
