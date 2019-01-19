<template lang="pug">
.plugin
  Code(source="install")
  Code(source="use")
</template>

<code name="install">
import LifecyclePlugin from 'rete-lifecycle-plugin';

editor.use(LifecyclePlugin);
</code>

<code name="use">
class AddComponent extends Rete.Component {
  constructor(){
    super("Add");
  }

  created(node) {
  }

  destroyed(node) {
  }

  onconnect(io) { // input or output
    return false; // prevent connect
  }

  ondisconnect(connection) {
    return false; // prevent disconnect
  }

  connected(connection) {
  }

  disconnected(connection) {
  }
}
</code>