<template lang="pug">
.header
  Menu.menu(
      mode="horizontal"
      width="100%"
    )
    MenuItem.logo(name="logo", :to="localePath('/')")
      Logo.icon.ivu-icon(:hover="true")
      span Rete.js
    .menu-burger(@click="drawer = true")
      Icon(type="md-menu" :size="20")
    .space
    Links.links
    Search
    .main-items
      MenuItems
    Language
  Drawer.drawer(
    placement="left"
    v-model="drawer"
  )
    Menu(width="auto")
      MenuItems
      Links.links
</template>

<script>
import { defineComponent } from 'vue';
import Logo from './Logo.vue';
import Language from './Language.vue';
import MenuItems from './MenuItems.vue';
import Links from './Links.vue';
import Search from './Search.vue';
import Drawer from './shared/Drawer.vue';

export default defineComponent({
  data() {
    return {
      drawer: false,
    };
  },
  components: {
    Logo,
    Language,
    MenuItems,
    Search,
    Drawer,
    Links,
  },
});
</script>

<style lang="sass" scoped>
@import '@/assets/styles/media.sass'

.header
  align-self: stretch
  position: sticky
  top: 0
  z-index: 2
  backdrop-filter: blur(10px)
  background: rgba(255, 255, 255, 0.8)
  .menu
    display: flex
    background: none
    .menu-burger
      display: none
    .space
      flex: 1
    +tablet
      .menu-burger
        display: unset
      .links
        display: none
      .main-items
        display: none

.links
  text-align: center

.logo
  font-size: 20px
  white-space: nowrap
  +phone
    padding: 0 1vw
  .icon
    height: 50px
    width: 50px
  & > *
    vertical-align: middle

</style>
