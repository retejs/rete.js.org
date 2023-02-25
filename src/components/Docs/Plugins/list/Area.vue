<template lang="pug">
.plugin
  Code(source="install")
</template>

<code name="install">
import AreaPlugin from 'rete-area-plugin';

editor.use(AreaPlugin, {
    background: false,
    snap: false,
    scaleExtent: { min: 0.1, max: 1 },
    translateExtent: { width: 5000, height: 4000 }
})

AreaPlugin.zoomAt(editor, nodes);
</code>
