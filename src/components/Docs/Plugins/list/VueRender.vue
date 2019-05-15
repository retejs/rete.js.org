<template lang="pug">
.plugin(v-t9n="'docs'")
  Code(source="install")
  Code(source="components")
  Code(source="use")
  p 
    | В случае, если вы подключаете фреймворк в проекте без Vue.js, вы должны подключить 
    a(href="https://vue-loader.vuejs.org/") vue-loader 
    | для использования однофайловых Vue.js компонентов или 
    a(href="https://github.com/retejs/examples/issues/9#issuecomment-436433281") компилировать шаблоны во время выполения.
</template>

<code name="install">
import VueRenderPlugin from 'rete-vue-render-plugin';

editor.use(VueRenderPlugin);
</code>

<code name="components">
import CustomNodeComponent from './CustomNodeComponent.vue';
import CustomControlComponent from './CustomControlComponent.vue';

class MyComponent extends Rete.Component {
  constructor(){
    // ...
    this.data.render = 'vue';
    this.data.component = CustomNodeComponent; // Vue.js компонент, не обязателен
    this.data.props = {}; // свойства для компонента выше, не обязателен
  }
}

class MyControl extends Rete.Control {
  constructor(){
    // ...
    this.data.render = 'vue';
    this.data.component = CustomControlComponent; // Vue.js компонент, не обязателен
    this.data.props = {}; // свойства для компонента выше, не обязателен
  }
}
</code>

<code name="use">
const node = editor.nodes[0];
const control = node.controls.get('ctrl');

await node.update(); // принудительное обновление представления
await control.update();

// в некоторых случаях вам может потребоваться Vue.js контекст
node.vueContext
control.vueContext
</code>