<template lang="pug">
.components(v-t9n.deep="'docs'")
  h1 Компоненты
  p Компоненты предназначены для упрощения разработки за счет сочетания тесно связанных функций построения и обработки узлов.
  p Компонент содержит билдер и воркер
  Code(source="componentPure")
  p
    | Билдер и воркер выполняются независимо друг от друга (первый работает один раз при создании узла, второй - при каждой обработке).
    | На самом деле они тесно связаны друг с другом в пределах одного узла.
  p Регистрация компонента:
  Code(source="registerComponent")

  h2 Билдеры узлов
  p Эти методы должны модифицировать экземпляр Node и необходимы редактору для восстановления всех узлов из данных JSON, поскольку данные JSON должны хранить только статическую информацию, а не логику узлов. 
  p Каждый из билдеров должен быть в соответствующем компоненте:
  Code(source="builder")

  h2 Воркеры узлов
  p 
    | Воркер - это функция для обработки данных узла. Они получают параметры узла, входы, выходы, и аргументы, передаваемые при обработке (опционально). 
    | Данные узла (не экземпляр узла), входы и выходы соответствуют определениям в билдерах (см.выше).
  Code(source="worker")
  p Как вы заметили, вы можете использовать асинхронные функции (или Promise для предыдущих версий ES). Это необходимо для выполнения сложных вычислений без блокировки основного потока (например, в WebWorker).
</template>

<code name="componentPure">
class MyComponent extends Rete.Component {
  constructor() {
    super("My Component"); // имя
  }

  builder(node) {
    /// модифицировать узел
  }

  worker(node, inputs, outputs) {
    /// обработать данные
  }
}
</code>

<code name="registerComponent">
var comp = new MyComponent();

editor.register(comp);
engine.register(comp);
</code>

<code name="builder">
class NumberComponent extends Rete.Component {
  constructor() {
    super('Number');
  }

  builder(node){
    // модифицировать узел
    node.data.num = 3;
    node.addInput(new Rete.Input('key1', 'Number', numSocket));
    node.addOutput(new Rete.Output('key2', 'Number', numSocket));
  }
}
</code>

<code name="worker">
class NumberComponent extends Rete.Component {
  constructor(){
    super('Number');
  }

  async worker(node, inputs, outputs){
    // inputs['key1']
    outputs['key2'] = node.data.num;
  }
}
</code>