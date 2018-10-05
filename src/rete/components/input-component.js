import { Component, Output } from 'rete';
import { FieldControl } from '../controls/field/index';
import Socket from '../sockets';

export class InputComponent extends Component {

    constructor() {
        super("Input");
        this.module = {
            nodeType: 'input',
            socket: Socket.num
        }
    }

    builder(node) {
        var out1 = new Output('output', "Number", Socket.num);
        var ctrl = new FieldControl(this.editor, 'name');

        return node.addControl(ctrl).addOutput(out1);
    }
}