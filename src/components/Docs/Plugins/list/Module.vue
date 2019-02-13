<template lang="pug">
.plugin(v-t9n.deep="'docs'")
  Code(source="install")
  p
    a(href="https://codepen.io/Ni55aN/pen/QOEbEW") Пример
</template>

<code name="install">
import ModulePlugin from 'rete-module-plugin';

const modules = {
    moduleName: { data: defaultData() }
}

editor.use(ModulePlugin, { engine, modules });

class InputNumber extends Component {
    constructor() {
        super('Input number');
        this.module = {
            nodeType: 'input',
            socket: sockets.num
        }
    }

    builder(node) {
        var out = new Output('output', 'Number', sockets.num); // ключ должен быть 'output'
        var ctrl = new FieldControl(this.editor, 'name', {value: ''}); // ключ должен быть 'name'
        var ctrl2 = new FieldControl(this.editor, 'number', {type: 'number', value: 1});
        
        return node
            .addControl(ctrl)
            .addControl(ctrl2)
            .addOutput(out);
    }

    async worker(node, inputs, outputs) {
        if (!outputs['num'])
            outputs['num'] = node.data.number; // здесь вы можете модифицировать возвращаемые в модуль выходные данные
    }
};

export default class ModuleComponent extends Component {

    constructor() {
        super("Module");
        this.module = {
            nodeType: 'module'
        }
    }

    builder(node) {
        var ctrl = new FieldControl(this.editor, 'module', {value: 'Module name..'}); // ключ должен быть 'module'
        ctrl.onChange = () => {
            this.updateModuleSockets(node);
            node.update();
        }
        return node.addControl(ctrl);
    }

    change(node, item) {
        node.data.module = item;
        this.editor.trigger('process');
    }
}

class OutputNumber extends Component {
    constructor() {
        super('Output number');
    }

    builder(node) {
        var inp = new Input('input', 'Number', sockets.num); // ключ должен быть 'input'
        var ctrl = new FieldControl(this.editor, 'name', {value: 'num'}); // ключ должен быть 'name'

        return node
            .addControl(ctrl)
            .addInput(inp);
    }
}
</code>
