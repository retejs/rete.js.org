<template lang="pug">
.plugin(v-t9n.deep="'docs'")
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
  init(task) {  // вызывается при инициализации всех тасков (при engine.process())
    task.run('any data');
    task.reset();
  }
}
</code>

<code name="worker">
worker(node, inputs, data) { // data это 'any data' из run()
  console.log('Keydown event', node.id, data);
  // inputs['inp_num1']
  this.closed = ['num1']; // предотвращает переход к выходному таску, который соединен с текущим через первый 'option' сокет
  return {num2: data} // возвращает выходные данные
}
</code>
