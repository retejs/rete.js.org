<template lang="pug">
.plugin
  Code(source="install")
  table
    thead
        tr
            th(v-for="h in head") {{h}}
    tbody
        tr(v-for="row in items")
            td(v-for="cell in row") {{cell}}
    p
      a(href="https://codesandbox.io/s/retejs-react-render-areaplugin-r8vpy?file=/src/rete.jsx") Example



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

<script>
    export default {
        data() {
            return {
                head: ['Property','Description'],
                items: [
                    ['background',	'(bool) Show hide the background grid'],
                    ['snap',	'(bool) Enable/disable the snapping of the nodes to the grid'],
                    ['scaleExtent',	'sets the scale borders between min and max zoom values'],
                    ['translateExtent',	'the width and height of the board size that can be dragged']
                ]
            }
        }
    }
</script>


