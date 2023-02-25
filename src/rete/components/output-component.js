import { Component, Input } from 'rete';
import { FieldControl } from '../controls/field/index';
import Socket from '../sockets';

export class OutputComponent extends Component {
  constructor() {
    super('Output');
    this.module = {
      nodeType: 'output',
      socket: Socket.num,
    };
  }

  builder(node) {
    const inp = new Input('input', 'Number', Socket.num);
    const ctrl = new FieldControl(this.editor, 'name');

    return node.addControl(ctrl).addInput(inp);
  }
}
