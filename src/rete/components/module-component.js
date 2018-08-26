import { Component } from 'rete';
import { TextControl } from '../controls/text-control';

export class ModuleComponent extends Component {

    constructor() {
        super("Module");
        this.module = {
            nodeType: 'module'
        }
    }

    builder(node) {
        var ctrl = new TextControl(this.editor, 'module');
        ctrl.onChange = () => {
            this.updateModuleSockets(node);
            node._alight.scan();
        }
        return node.addControl(ctrl);
    }

    change(node, item) {
        node.data.module = item;
        this.editor.trigger('process');
    }
}