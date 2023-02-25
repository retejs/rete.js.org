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

  onconnect(io) { // вход или выход
    return false; // предотвратить соединение
  }

  ondisconnect(connection) {
    return false; // предотвратить отсоединение
  }

  connected(connection) {
  }

  disconnected(connection) {
  }
}
</code>
