<template lang="pug">
div(v-t9n.deep="'docs'")
  MenuItem(name="start" to="/docs") Главное
  MenuItem(name="editor" to="/docs/editor") Редактор
  MenuItem(name="engine" to="/docs/engine") Движок
  MenuItem(name="components" to="/docs/components") Компоненты
  MenuItem(name="nodes" to="/docs/nodes") Узлы
  MenuItem(name="sockets" to="/docs/sockets") Сокеты
  MenuItem(name="controls" to="/docs/controls") Контролы
  MenuItem(name="events" to="/docs/events") События
  MenuItem(name="plugins" to="/docs/plugins") Плагины
</template>
