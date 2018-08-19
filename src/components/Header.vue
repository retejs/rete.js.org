<template lang="pug">
.header
  Menu.menu(mode="horizontal")
    MenuItem.logo(name="1", to="/")
      Logo.icon.ivu-icon(:hover="true")
      span Rete.js
    .space
    Submenu(name="2")
      template(slot="title") {{'Изучение' | translate}}
      MenuItem(name="2-2", to="/docs") {{'Документация' | translate}}
      MenuItem(name="2-1", to="/examples") {{'Примеры' | translate}}
    Submenu(name="3")
      template(slot="title") {{'Экосистема' | translate}}
      MenuItem(name="3-1", to="/components") {{'Компоненты' | translate}}
      MenuItem(name="3-1", to="/cli") {{'Rete CLI' | translate}}
    MenuItem(name="4", to="/donate") {{'Пожертвовать' | translate}}
</template>

<script>
import Logo from './Logo';

export default {
  components: {
    Logo
  }
}
</script>


<style lang="sass" scoped>
.header
  align-self: stretch
  .menu
    display: flex
    .logo
      font-size: 20px
      .icon
        height: 50px
        width: 50px
    .space
      flex: 1
</style>

