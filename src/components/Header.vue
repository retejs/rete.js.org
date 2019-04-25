<template lang="pug">
.header(v-t9n.deep)
  Menu.menu(
      mode="horizontal"
      width="100%"
    )
    MenuItem.logo(name="logo", to="/")
      Logo.icon.ivu-icon(:hover="true")
      span Rete.js
    .menu-burger(v-if="isTabletScreen" @click="drawer = true")
      Icon(type="md-menu" :size="20")
    .space
    Search
    MenuItems(v-if="!isTabletScreen")
    Language
  Drawer.drawer(
    placement="left"
    v-model="drawer"
  )
    Menu(width="auto")
      MenuItems
</template>

<script>
import Logo from './Logo';
import Language from './Language';
import MenuItems from './MenuItems';
import Search from './Search';
import Drawer from '../shared/Drawer';
import mediaMixin from '../utils/media.mixin';

export default {
  mixins: [mediaMixin],
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    isTabletScreen() {
      return this.screenWidth < 850;
    }
  },
  components: {
    Logo,
    Language,
    MenuItems,
    Search,
    Drawer
  }
}
</script>


<style lang="sass" scoped>
@import '@/assets/styles/media.sass'

.header
  align-self: stretch
  .menu
    display: flex
    .space
      flex: 1
  
.logo
  font-size: 20px
  white-space: nowrap
  +phone
    padding: 0 1vw
  .icon
    height: 50px
    width: 50px
</style>