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
</template>

<code name="install">
import ConnectionPathPlugin from 'rete-connection-path-plugin';

editor.use(ConnectionPathPlugin, {
    type: ConnectionPathPlugin.DEFAULT, // DEFAULT or LINEAR transformer
    transformer: () => ([x1, y1, x2, y2]) => [[x1, y1], [x2, y2]], // optional, custom transformer
    curve: ConnectionPathPlugin.curveBundle, // curve identifier
    options: { vertical: false, curvature: 0.4 }, // optional
    arrow: { color: 'steelblue', marker: 'M-5,-10 L-5,10 L20,0 z' }
});
</code>


<script>
export default {
  data() {
    return {
      head: ['Свойство','Описание'],
      items: [
        ['type',	'Type of built-in transformer'],
        ['transformer',	'Custom transformer'],
        ['curve',	'any curve from d3-shape'],
        ['options',	'{ vertical: Boolean, curvature: Number }'],
        ['arrow',	'Boolean or { color, marker: /* path d attribute */ }']
      ]
    }
  }
}
</script>
