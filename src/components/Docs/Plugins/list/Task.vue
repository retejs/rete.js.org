<template lang="pug">
.plugin(v-t9n.deep="'docs'")
  Code(source="install")
  p Внутри конструктора компонента указываются типы выходов (option, output) и коллбэк функция для инициализации
  Code(source="contruct")
  p Значение option указывает на то, что выход данного типа служит для передачи управления следующим узлам.
    | Выход типа output работает так же, как и в обычной схеме без этого плагина
  p Узлы могут запускаться по какому-либо событию в реальном времени (к этому моменту init уже будет вызван)
  Code(source="run_task")
  p После выполнения метода worker выходные данные будут сохранены и использованы в дальнейших обращениях к этому узлу.
    | Если узел должен подготовить новые данные, нужно очистить предыдущие.
  Code(source="reset_task")
  p Метод
    i worker
    span должен выглядеть следующим образом
  Code(source="worker")
  p Здесь возвращается объект с ключами (в отличии от обычной схемы), которые совпадают с выходами, тип которых является 'output'
</template>

<code name="install">
import TaskPlugin from 'rete-task-plugin';

editor.use(TaskPlugin);
</code>

<code name="contruct">
this.task = {
  // <output key>:<type>
  outputs: {
    num1: 'option', // тип для передачи управления
    num2: 'output' // тип для передачи данных
  },
  init(task) {  // вызывается при инициализации всех тасков (при engine.process())
    initialTask = task; // таск может быть сохранен для его отложенного запуска
  }
}
</code>

<code name="run_task">
// например, вызывается по клику на кнопку для старта обработки
initialTask.run('any data');
</code>

<code name="reset_task">
task.reset(); // очистить выходные данные, которые были сохранены ранее
</code>

<code name="worker">
worker(node, inputs, data) { // data это 'any data' из run()
  this.closed = ['num1']; // предотвращает переход к выходному таску, который соединен с текущим через первый 'option' сокет

  return {
    num2: data // возвращает выходные данные
  }
}
</code>
