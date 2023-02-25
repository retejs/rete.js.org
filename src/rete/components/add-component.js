import { Component, Input, Output } from 'rete';
import { FieldControl } from '../controls/field/index';
import Socket from '../sockets';

export class AddComponent extends Component {
  constructor(CustomFieldControl) {
    super('Add');
    this.CustomFieldControl = CustomFieldControl;
  }

  builder(node) {
    const Field = this.CustomFieldControl || FieldControl;
    const inp1 = new Input('num1', 'Number', Socket.num);
    const inp2 = new Input('num2', 'Number', Socket.num);
    const out = new Output('num', 'Number', Socket.num);

    inp1.addControl(new Field(this.editor, 'num1', 'number'));
    inp2.addControl(new Field(this.editor, 'num2', 'number'));

    return node
      .addInput(inp1)
      .addInput(inp2)
      .addControl(new Field(this.editor, 'preview', 'number', true))
      .addOutput(out);
  }

  worker(node, inputs, outputs) {
    const n1 = inputs.num1.length ? inputs.num1[0] : node.data.num1;
    const n2 = inputs.num2.length ? inputs.num2[0] : node.data.num2;
    const sum = n1 + n2;

    const n = this.editor.nodes.find((item) => String(item.id) === String(node.id));
    if (n) n.controls.get('preview').setValue(sum);
    outputs.num = sum;
  }
}
