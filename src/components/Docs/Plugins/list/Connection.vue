<template lang="pug">
.plugin
  Code(source="install")
</template>

<code name="install">
import ConnectionPlugin from 'rete-connection-plugin';

editor.use(ConnectionPlugin);
</code>
