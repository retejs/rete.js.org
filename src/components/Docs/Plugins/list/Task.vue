<template lang="pug">
.plugin
  Code(source="install")
  p Внутри конструктора компонента
  Code(source="contruct")
  p 
    i worker 
    span должен выглядеть следующим образом
  Code(source="worker")
</template>

<code name="install">
import TaskPlugin from 'rete-task-plugin';

editor.use(TaskPlugin);
</code>

<code name="contruct">
this.task = {
  outputs: {num1: 'option', num2: 'output'},
  init(task) {  // сalled when initializing all tasks (at the engine.process())
    task.run('any data');
    task.reset();
  }
}
</code>

<code name="worker">
worker(node, inputs, data) { // data is 'any data' from run()
  console.log('Keydown event', node.id, data);
  // inputs['inp_num1']
  this.closed = ['num1']; // prevents the call of the Tasks, which are connected to the current task through the first 'option' socket
  return {num2: data} // return output data
}
</code>
