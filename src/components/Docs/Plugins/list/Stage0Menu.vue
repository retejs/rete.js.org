<template lang="pug">
.plugin
  Code(source="install")
  p
    a(href="https://codepen.io/anon/pen/jQBxKe") Example
  p Check/replace 'stage0-menu-plugin.debug.css' to add your own style
  table
    thead
      tr
        th(v-for="h in head") {{h}}
    tbody
      tr(v-for="row in items")
        td(v-for="cell in row") {{cell}}
</template>

<code name="install">
import Stage0MenuPlugin from 'stage0-rete-menu-plugin';

editor.use(Stage0MenuPlugin, {
    menuOptions: {
        delay: 100,
        searchBar: false,
        allocate(component) {
            if (component.name == "Add") {
                return false;
            }
            return ["menu", "submenu"];
        },
        items: {
            Menu: {
                "Add component": {
                    Add: components[1]
                },
                Fn: () => {
                    alert("Fn");
                }
            }
        }
    },
    dockedMenuOptions: {
        delay: 100,
        allocate(component) {
            return false;
        },
        items: {
            Menu: {
                "Add component": {
                    Add: components[1]
                },
                "Add component 2": {
                    X: components[1]
                }
            }
        }
    }
}});
</code>

<script>
export default {
  data() {
    return {
      head: ['Опция', 'Описание', 'По умолчанию'],
      items: [
        ['searchBar',	'Showing search bar',	true],
        ['delay',	'Delay hide, ms',	100],
        ['allocate',	'function for placing of components into submenu (return false to exclude)',	'() => []'],
        ['items',	'Hand crafted menu',	'{}']
      ]
    }
  }
}
</script>
