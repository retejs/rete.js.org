import { Component, Input, Output } from 'rete';
import Socket from '../sockets';

export class EnterPressComponent extends Component {
  
    constructor(){
      super('Match');
      this.task = {
        outputs: {then: 'option', else: 'option'}
      }
    }
    
    builder(node) {
  
      node
        .addInput(new Input('act', '', Socket.action))
        .addInput(new Input('key', 'Ctrl pressed', Socket.data))
        .addOutput(new Output('then', 'Then', Socket.action))
        .addOutput(new Output('else', 'Else',Socket.action));
    }
  
    worker(node, inputs) {
      if (inputs['key'][0]) 
        this.closed = ['else'];
      else 
        this.closed = ['then'];
  
    }
  }