<template lang="pug">
.plugin
  Code(source="install")
  p 
    span Rete renderer using 
    a(href="https://www.npmjs.com/package/stage0") Stage0 
    span (~1.6 kb framewok)
  p
    a(href="https://codepen.io/anon/pen/jQBxKe") Example
  p Package features a separate CSS stylesheet
  Code(source="component")
  Code(source="use")
</template>

<code name="install">
import Stage0RenderPlugin from 'rete-stage0-render-plugin';

editor.use(Stage0RenderPlugin);
</code>

<code name="component">
import CustomNodeComponent from './CustomNodeComponent.js';

class MyComponent extends Rete.Component {
    constructor(){
        // ...
        this.data.render = 'stage0';
        this.data.component = CustomNodeComponent; // stage0.js component, not required
        this.data.props = {}; // props for the component above, not required
    }
}
</code>

<code name="use">
const node = editor.nodes[0];
const control = node.controls.get('ctrl');

node.update(); // force update
control.update(); // of view

// in some cases you can gt stage0.js context
node.stage0Context
control.stage0Context
</code>