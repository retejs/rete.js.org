<template lang="pug">
.plugin(v-t9n.deep="'docs'")
  Code(source="install")
  p Например, схема с такими узлами
  Code(source="visualize")
  p сгенерирует следующий исходный код
  Code(source="example")
</template>

<code name="install">
import CodePlugin from 'rete-code-plugin';

class NumComponent extends Rete.Component {
    // ...

    code(node, inputs, add) { // параметр 'node' как у worker()
        // 'inputs' содержить имена переменных
        add('console.log("hello!")') // добавить строку кода
        add('num', node.data.num); // добавить переменную со значением "node.data.num"
    }
}

const sourceCode = await CodePlugin.generate(engine, editor.toJSON());
</code>


<code name="visualize">
Number 6
        \ Add 11 -- Add 16
        /         /
Number 5 ---------
</code>

<code name="example">
console.log("hello!");
const number1num = 5;
console.log("hello!");
const number3num = 6;
const add4num = number3num + number1num;
const add2num = add4num + number1num;
</code>