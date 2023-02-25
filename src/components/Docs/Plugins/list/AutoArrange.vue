<template lang="pug">
.plugin(v-t9n.deep="'docs'")
  Code(source="install")
  p
    span где
    span depth -
    span максимальная глубина для аранжировки (0 - без ограничений)
  Code(source="use")
</template>

<code name="install">
import AutoArrangePlugin from 'rete-auto-arrange-plugin';

editor.use(AutoArrangePlugin, { margin: {x: 50, y: 50 }, depth: 0 });
</code>

<code name="use">
editor.arrange(node);
</code>
