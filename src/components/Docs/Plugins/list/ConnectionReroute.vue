<template lang="pug">
.plugin
  Code(source="install")
</template>

<code name="install">
import ConnectionReroutePlugin from 'rete-connection-reroute-plugin';

editor.use(ConnectionReroutePlugin);
</code>
