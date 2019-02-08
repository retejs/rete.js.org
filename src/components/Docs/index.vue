<template lang="pug">
.docs(v-t9n.deep="'docs'")
  Menu.menu
    h1 Документация
    MenuItem(name="start" to="/docs") Главное
    MenuItem(name="editor" to="/docs/editor") Редактор
    MenuItem(name="engine" to="/docs/engine") Движок
    MenuItem(name="components" to="/docs/components") Компоненты
    MenuItem(name="nodes" to="/docs/nodes") Узлы
    MenuItem(name="sockets" to="/docs/sockets") Сокеты
    MenuItem(name="controls" to="/docs/controls") Контролы
    MenuItem(name="events" to="/docs/events") События
    MenuItem(name="plugins" to="/docs/plugins") Плагины
  .content
    router-view
</template>


<script>
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/atom-one-dark.css';

Vue.use(VueHighlightJS);


export default {
  
}
</script>


<style lang="sass" scoped>
.docs
  display: flex
  text-align: left
  .menu
    text-align: right
    h1
      margin: 1em
  .content
    flex: 1
    position: relative
    padding: 2em
    overflow: auto

</style>

<style lang="sass">
.docs .content
  ul
    margin: 1em 3em
    li
      margin: 0.2em 0
  img
    margin: 1em 0
    max-width: 100%
</style>

