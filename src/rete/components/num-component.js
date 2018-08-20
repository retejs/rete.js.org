import { Component, Output } from 'rete';
import { NumControl } from '../controls/num-control';
import Socket from '../sockets';

export class NumComponent extends Component {

    constructor() {
        super("Number");
    }

    builder(node) {
        var out1 = new Output('num', "Number", Socket.num);

        return node.addControl(new NumControl(this.editor, 'num')).addOutput(out1);
    }

    worker(node, inputs, outputs) {
        outputs['num'] = node.data.num;
    }
}