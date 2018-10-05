import { Component, Output } from 'rete';
import { FieldControl } from '../controls/field/index';
import Socket from '../sockets';

export class NumComponent extends Component {

    constructor(CustomFieldControl) {
        super("Number");
        this.CustomFieldControl = CustomFieldControl;
    }

    builder(node) {
        var Field = this.CustomFieldControl || FieldControl;
        var out1 = new Output('num', "Number", Socket.num);

        return node.addControl(new Field(this.editor, 'num', 'number')).addOutput(out1);
    }

    worker(node, inputs, outputs) {
        outputs['num'] = node.data.num;
    }
}