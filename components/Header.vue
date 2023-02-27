<template lang="pug">
.header
  Menu.menu(
      mode="horizontal"
      width="100%"
    )
    MenuItem.logo(name="logo", :to="localePath('/')")
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
import { defineComponent, ref, computed } from 'vue';
import { useWindowSize } from 'vue-window-size';
import Logo from './Logo.vue';
import Language from './Language.vue';
import MenuItems from './MenuItems.vue';
import Search from './Search.vue';
import Drawer from './shared/Drawer.vue';

export default defineComponent({
  setup() {
    const { width } = useWindowSize();

    return {
      drawer: ref(false),
      isTabletScreen: process.client ? computed(() => width.value <= 768) : false,
    };
  },
  components: {
    Logo,
    Language,
    MenuItems,
    Search,
    Drawer,
  },
});
</script>

<style lang="sass" scoped>
// @import '@/assets/styles/media.sass'

.header
  align-self: stretch
  .menu
    display: flex
    .space
      flex: 1

.logo
  font-size: 20px
  white-space: nowrap
  // +phone
  //   padding: 0 1vw
  .icon
    height: 50px
    width: 50px
  & > *
    vertical-align: middle

</style>
