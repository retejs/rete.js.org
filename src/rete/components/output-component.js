import { Component, Input } from 'rete';
import { TextControl } from '../controls/text-control';
import Socket from '../sockets';

export class OutputComponent extends Component {

    constructor() {
        super("Output");
        this.module = {
            nodeType: 'output',
            socket: Socket.num
        }
    }

    builder(node) {
        var inp = new Input('input', "Number", Socket.num);
        var ctrl = new TextControl(this.editor, 'name');

        return node.addControl(ctrl).addInput(inp);
    }
}