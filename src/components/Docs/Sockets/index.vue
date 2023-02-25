<template lang="pug">
.sockets(v-t9n.deep="'docs'")
  h1 Сокеты
  p
    | Сокеты используются для определения того, какие входы и выходы могут быть подключены между собой.
    | Они отвечают за тип данных, которые могут быть переданы с одного узла в другой.
  p Прежде всего, вы должны объявить все сокеты, которые будут использоваться в редакторе.
  Code(source="sockets")
  p Переданый параметр должен быть уникальным. Согдасно нему будет создан CSS класс в формате kebb-case, к которому вы можете применить стили.
  Code(lang="css" source="socketCSS")
  p
    | В результате вы можете подключить только входы и выходы с одинаковыми разъемами.
    | Хотя могут быть ситуации, когда нужно подключать разные сокеты. Для этого есть метод `combineWith`:
  Code(source="combineSocket")
  p Теперь вы можете подключить `numSocket` к `anyTypeSocket`, но не наоборот
</template>

<code name="sockets">
const numSocket = new Rete.Socket('Number');
const strSocket = new Rete.Socket('String');
</code>

<code name="socketCSS">
.socket.number {
  background: #96b38a
}
</code>

<code name="combineSocket">
const anyTypeSocket = new Rete.Socket('Any type');
numSocket.combineWith(anyTypeSocket);
</code>
