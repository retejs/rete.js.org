import { Component, Output } from 'rete';
import { FieldControl } from '../controls/field/index';
import Socket from '../sockets';

export class NumComponent extends Component {

    constructor() {
        super("Number");
    }

    builder(node) {
        var out1 = new Output('num', "Number", Socket.num);

        return node.addControl(new FieldControl(this.editor, 'num', 'number')).addOutput(out1);
    }

    worker(node, inputs, outputs) {
        outputs['num'] = node.data.num;
    }
}