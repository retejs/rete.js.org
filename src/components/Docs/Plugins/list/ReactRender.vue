<template lang="pug">
.plugin(v-t9n="'docs'")
  Code(source="install")
  p Создание контрола на основе React компонента
  Code(source="create_control")
  p Кастомизация узлов. Кастомный узел создается в виде React компонента
  Code(source="custom_node")
  p Он может быть передан в свойство component при подключении плагина
  Code(source="global_node")
  p или в определенный компонент
    Code(source="component_node")
  p
    a(href="https://codesandbox.io/s/retejs-react-render-t899c") Пример
</template>

<code name="install">
import ReactRenderPlugin from 'rete-react-render-plugin';

editor.use(ReactRenderPlugin);
</code>

<code name="create_control">
class MyReactControl extends React.Component {

  componentDidMount() {
      // this.props.getData
      // this.props.putData
  }

  render() {
    return (
        <div>Hello ${this.props.name}!</div>
    )
  }
}

class MyControl extends Rete.Control {
  constructor(emitter, key, name) {
    super(key);
    this.render = 'react';
    this.component = MyReactControl;
    this.props = { emitter, name };
  }
}
</code>

<code name="custom_node">
import ReactRenderPlugin, { Node, Socket, Control } from 'rete-react-render-plugin';

export class MyNode extends Node {
  render() {
    const { node, bindSocket, bindControl } = this.props;
    const { outputs, controls, inputs, selected } = this.state;

    return (
      <div className={`node ${selected}`}>
        <div className="title">{node.name}</div>
        {/* Outputs */}
        {outputs.map((output) => (
          <div className="output" key={output.key}>
            <div className="output-title">{output.name}</div>
            <Socket type="output" socket={output.socket} io={output} innerRef={bindSocket} />
          </div>
        ))}
        {/* Controls */}
        {controls.map(control => (
          <Control className="control" key={control.key} control={control} innerRef={bindControl} />
        ))}
        {/* Inputs */}
        {inputs.map(input => (
          <div className="input" key={input.key}>
            <Socket type="input" socket={input.socket} io={input} innerRef={bindSocket} />
            {!input.showControl() && <div className="input-title">{input.name}</div>}
            {input.showControl() && <Control className="input-control" control={input.control} innerRef={bindControl} />}
          </div>
        ))}
      </div>
    )
  }
}
</code>

<code name="global_node">
editor.use(ReactRenderPlugin, {
    component: MyNode
}
</code>

<code name="component_node">
class AddComponent extends Rete.Component {
  constructor() {
    super("Add");
    this.data.component = MyNode;
  }
// ...
</code>
