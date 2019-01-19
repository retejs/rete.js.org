<template lang="pug">
.plugin
  Code(source="install")
  Code(source="use")
</template>

<code name="install">
import LinterPlugin from 'rete-linter-plugin';

editor.use(LinterPlugin, { analyzeOnChange: true, delay: 500 });
</code>

<code name="use">
editor.on('analyzed', warnings => {}); 

editor.trigger('analyze');
</code>
