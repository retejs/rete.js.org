<template lang="pug">
.header(v-t9n.deep)
  Menu.menu(
      mode="horizontal"
      width="100%"
    )
    MenuItem.logo(name="logo", to="/")
      Logo.icon.ivu-icon(:hover="true")
      span Rete.js
    .menu-burger(v-if="isPhoneScreen" @click="drawer = true")
      Icon(type="md-menu" :size="20")
    .space
    MenuItems(v-if="!isPhoneScreen")
    Language
  Drawer.drawer(
    placement="left"
    v-model="drawer"
  )
    Menu(width="auto")
      MenuItem.logo(name="logo", to="/")
        Logo.icon.ivu-icon(:hover="true")
        span Rete.js
      MenuItems
</template>

<script>
import Logo from './Logo';
import Language from './Language';
import MenuItems from './MenuItems';
import mediaMixin from '../utils/media.mixin';

export default {
  mixins: [mediaMixin],
  data() {
    return {
      drawer: false
    }
  },
  components: {
    Logo,
    Language,
    MenuItems
  }
}
</script>


<style lang="sass" scoped>
.header
  align-self: stretch
  .menu
    display: flex
    .space
      flex: 1
  
.logo
  font-size: 20px
  .icon
    height: 50px
    width: 50px
</style>

<style lang="sass">
.drawer
  .ivu-drawer-body
    padding: 0
</style>
