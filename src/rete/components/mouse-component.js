import { Component, Output } from 'rete';
import Socket from '../sockets';

export class MouseComponent extends Component {
  constructor(events) {
    super('Mouse event');
    this.task = {
      outputs: { act: 'option', key: 'output' },
      init(task) {
        events.remove('mousemove');
        events.add('mousemove', (e) => {
          task.run(e.ctrlKey);
          task.reset();
        });
      },
    };
  }

  builder(node) {
    node.addOutput(new Output('act', '', Socket.action));
    node.addOutput(new Output('key', 'Key code', Socket.data));
  }

  worker(node, inputs, data) {
    return {
      key: data,
    };
  }
}
