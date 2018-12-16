<template lang="pug">
.header(v-t9n.deep)
  Menu.menu(
      :mode="smallScreen?'vertical':'horizontal'"
      :class="{horizontal: !smallScreen}"
      width="100%"
    )
    MenuItem.logo(name="logo", to="/")
      Logo.icon.ivu-icon(:hover="true")
      span Rete.js
    .space
    Submenu(name="learn")
      span(slot="title") Изучение
      MenuItem(name="docs", to="/docs") Документация
      MenuItem(name="examples", to="/examples") Примеры
    Submenu(name="ecosystem")
      span(slot="title") Экосистема
      MenuItem(name="components", to="/components") Компоненты
      MenuItem(name="issues", to="/issues") Проблемы
      MenuItem(name="cli", to="/cli") Rete CLI
    MenuItem(name="support", to="/support") Поддержать
    Language
</template>

<script>
import Logo from './Logo';
import Language from './Language';

export default {
  data() {
    return {
      smallScreen: false,
    }
  },
  components: {
    Logo,
    Language
  },
  methods: {
    resize() {
      this.smallScreen = window.innerWidth < 500
    }
  },
  mounted(){
    this.resize();
    window.addEventListener('resize', this.resize)
  }
}
</script>


<style lang="sass" scoped>
.header
  align-self: stretch
  .menu
    &.horizontal
      display: flex
    .logo
      font-size: 20px
      .icon
        height: 50px
        width: 50px
    .space
      flex: 1
</style>

