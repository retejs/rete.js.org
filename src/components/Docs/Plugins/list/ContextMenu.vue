<template lang="pug">
.plugin(v-t9n.deep="'docs'")
  Code(source="install")
  table
    thead
      tr
        th(v-for="h in head") {{h}}
    tbody
      tr(v-for="row in items")
        td(v-for="cell in row") {{cell}}
  p 
    span Вы можете произвольно поместить компонент в подменю.
    span Примеры
    span :
  Code(source="allocate")
  p Вы можете заменить имена элементов, которые создают узлы
  Code(source="rename")
</template>

<code name="install">
import ContextMenuPlugin from 'rete-context-menu-plugin';

editor.use(ContextMenuPlugin, {
    searchBar: false,
    delay: 100,
    allocate(component) {
        return ['Submenu'];
    },
    rename(component) {
        return component.name;
    },
    items: {
        'Click me'(){ console.log('Works!') }
    }
});
</code>

<code name="allocate">
allocate() { return ["Single submenu"] }
allocate(component) { return component.path } // где path это стек меню для каждого компонента
allocate(component) { return null } // исключение компонента из меню
</code>

<code name="rename">
class MyComponent {
    constructor() {
        super("My comp");
        this.contextMenuName = "Add My comp";
    }
}
///
rename(component) { return component.contextMenuName || component.name }
</code>

<script>
export default {
  data() {
    return {
      head: ['Опция', 'Описание', 'По умолчанию'],
      items: [
        ['searchBar',	'Showing search bar',	true],
        ['delay',	'Delay hide, ms',	1000],
        ['allocate',	'function for placing of components into submenu',	'() => []'],
        ['rename',	'function for renaming of items',	'component => component.name'],
        ['items',	'custom items (Object with nested objects and functions)',	'{}']
      ]
    }
  }
}
</script>
