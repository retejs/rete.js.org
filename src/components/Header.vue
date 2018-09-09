<template lang="pug">
.header
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
      template(slot="title") {{'Изучение' | translate}}
      MenuItem(name="docs", to="/docs") {{'Документация' | translate}}
      MenuItem(name="examples", to="/examples") {{'Примеры' | translate}}
    Submenu(name="ecosystem")
      template(slot="title") {{'Экосистема' | translate}}
      MenuItem(name="components", to="/components") {{'Компоненты' | translate}}
      MenuItem(name="cli", to="/cli") {{'Rete CLI' | translate}}
    MenuItem(name="support", to="/support") {{'Поддержать' | translate}}
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

