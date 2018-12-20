<template lang="pug">
.events
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
  Code 
    | editor.on('process', () => {
    |   // {{$t('например, вызовите editor.process()')}}
    | });
  p События, которые можно предотвратить, выполняются перед действием и дают вам возможность принять решение, чтобы предотвратить их.
  Code 
    | editor.on('nodecreate', node => {
    |   return editor.nodes.some(item => item.name === node.name); // {{$t('предотвратить добавление нового узла')}}
    | });
  p Перед действием проверяются все слушатели события, и если хотя бы один из них возвращает false, действие не будет выполнено. По умолчанию `return true` не нужен.
  p Также вы можете обрабатывать несколько событий.
  Code editor.on('nodecreated connectioncreated noderemoved connectionremoved', () => {});
</template>


<script>
import Code from '@/shared/Code';
import list from './list';

export default {
  data() {
    return {
      list
    }
  },
  components: {
    Code
  }
}
</script>


<style lang="sass" scoped>
.events
  table
    border-collapse: collapse
    border-spacing: 0
    empty-cells: show
    th, td
      padding: 0.8em
    tr:nth-child(2n-1) td
      background: #f2f2ff
</style>
