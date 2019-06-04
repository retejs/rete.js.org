<template lang="pug">
.plugin(v-t9n="'docs'")
  Code(source="install")
  p Представление контрола основывается на Vue компоненте 
  Code(source="control_component")
  p 
    | В стандартной ситуации кода выше будет достаточно, но 
    | если вы хотите кастомизировать узлы, вы можете сделать 
    | это следующим образом. Определить общий Vue компонент
  Code(source="install_common")
  p или определить индивидуально для компонента
  Code(source="node_component")
  p Работая с динамически изменяемыми узлами или контролами, вы должны выполнять их обновление
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

<code name="install_common">
import VueRenderPlugin from 'rete-vue-render-plugin';

editor.use(VueRenderPlugin, {
  component: CustomNodeComponent
});
</code>

<code name="control_component">
import CustomControlComponent from './CustomControlComponent.vue';

class MyControl extends Rete.Control {
  constructor(){
    // ...
    this.render = 'vue';
    this.component = CustomControlComponent; // Vue.js компонент, не обязателен
    this.props = {}; // свойства для компонента выше, не обязателен
  }
}
</code>

<code name="node_component">
import CustomNodeComponent from './CustomNodeComponent.vue';

class MyComponent extends Rete.Component {
  constructor(){
    // ...
    this.data.render = 'vue';
    this.data.component = CustomNodeComponent; // Vue.js компонент, не обязателен
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