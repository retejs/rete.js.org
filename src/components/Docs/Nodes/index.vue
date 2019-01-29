<template lang="pug">
.nodes(v-t9n.deep="'docs'")
  h1 Узлы
  Node
  p Все узлы могут содержать имя, входы, выходы и контролы.
  p Имя должно идентифицировать узел и однозначно указывать его предназначение.
  p 
    | Входы и выходы должны быть расположены слева и справа от узла соответственно (для кастомных узлов могут быть исключения).
    | Они представлены сокетом и могут иметь имена. Все выходы могут иметь неограниченное количество соединений. 
    | По умолчанию входы могут иметь только одно соединение. Вы можете изменить это как для входов, так и для выходов
  p Вход с неограниченным количествой подключений, выход с разрешенным только одним соединением:
  Code(source="createIOs")
  p 
    | Контролы могут располагаться либо непосредственно на самом узле, либо прикреплены к конкретному входу. 
    | Фактически, местоположение в первом случае определяется в стандартном шаблоне плагина для рендеринга. 
    | Во втором случае Контрол отображается, когда на входе нет соединения.
    | Это необходимо для гарантии того, что Контрол отвечает за предоставление входных данных, когда они не передаются с другого узла.
  p Давайте создадим узел (исключительно для создания в Билдере)
  Code(source="createNode")
</template>

<code name="createIOs">
new Rete.Input ('num', 'Number', numSocket, true);
new Rete.Output ('num', 'Number', numSocket, false);
</code>

<code name="createNode">
var in1 = new Rete.Input('num1', 'Number', numSocket);
var in2 = new Rete.Input('num2', 'Number', numSocket, true); // can have multiple connections
var out = new Rete.Output('Number', numSocket); // the third parameter must be false to deny multiple connections

var numControl = new NumControl();

var numNode = new Rete.Node('Add');
numNode.addInput(in1);
numNode.addInput(in2);
numNode.addControl(numControl);
numNode.addOutput(out);
</code>


<script>
import Node from '../shared/Node.vue';

export default {
  components: {
    Node
  }
}
</script>


<style lang="sass" scoped>
.nodes
</style>
