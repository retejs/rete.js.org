<template lang="pug">
.events(v-t9n.deep="'docs'")
  h1 События
  p Архитектура фреймворка построена на основе событийной модели, что позволило добиться слабой связи между компонентами и модифицировать редактор с помощью плагинов.
  p Редактор работает со следующими событиями:
  table
    thead
      tr
        th Имя события
        th Параметры
        th Предотвращаемые
        th Замечание
    tbody
      tr(v-for="item in list")
        td {{item[0]}}
        td {{item[1]}}
        td {{item[2]?'✓':''}}
        td {{item[3]}}
  p Подписаться на события можно используя метод `on()`
  Code(source="process")
  p События, которые можно предотвратить, выполняются перед действием и дают вам возможность принять решение, чтобы предотвратить их.
  Code(source="nodecreate")

  p Перед действием проверяются все слушатели события, и если хотя бы один из них возвращает false, действие не будет выполнено. По умолчанию `return true` не нужен.
  p Также вы можете обрабатывать несколько событий.
  Code(source="events")
</template>

<code name="process">
editor.on('process', () => {
  // for example, call editor.process()
});
</code>

<code name="nodecreate">
editor.on('nodecreate', node => {
 return editor.nodes.some(item => item.name === node.name); // prevent adding of new node
});
</code>

<code name="">
editor.on('nodecreated connectioncreated noderemoved connectionremoved', () => {});
</code>

<script>
import list from './list';

export default {
  data() {
    return {
      list
    }
  }
}
</script>