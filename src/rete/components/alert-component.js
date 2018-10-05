import { Component, Input } from 'rete';
import { FieldControl } from '../controls/field/index';
import Socket from '../sockets';

export class AlertComponent extends Component {
  
    constructor(alertInterface) {
      super('Alert');
      this.alertInterface = alertInterface;
      this.task = {
        outputs: {}
      }
    }
  
    builder(node) {
      const ctrl = new FieldControl(this.editor, 'msg', false);
      
      ctrl.setValue(node.data.msg);

      node
        .addControl(ctrl)
        .addInput(new Input('act', '', Socket.action));
    }
  
    worker(node) {
      const $Message = this.component.alertInterface;
      
      $Message.destroy()
      $Message.success(node.data.msg);
   }
  }