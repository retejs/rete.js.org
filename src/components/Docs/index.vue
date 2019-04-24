<template lang="pug">
.docs(v-t9n.deep="'docs'" :class="{phone: isPhoneScreen}")
  Menu.menu(width="auto")
    h1 Документация
      Icon.burger-icon(
        v-if="isPhoneScreen"
        type="md-menu"
        :size="20"
        @click="drawer = true"
      )
    MenuItems(v-if="!isPhoneScreen")
  .content
    router-view
  Drawer.drawer(
    v-model="drawer"
  )
    Menu(width="auto")
      MenuItems
</template>


<script>
import Vue from 'vue';
import mediaMixin from '../../utils/media.mixin';
import MenuItems from './MenuItems';
import Code from '@/shared/Code';

Vue.component('Code', Code);

export default {
  mixins: [mediaMixin],
  data() {
    return {
      drawer: false
    }
  },
  components: {
    MenuItems
  }
}
</script>

<style lang="sass" scoped>
.docs
  display: flex
  text-align: left
  &.phone
    flex-direction: column
    .menu
      width: 100%
      z-index: 1
  .menu
    text-align: right
    h1
      margin: 1em
  .content
    flex: 1
    position: relative
    padding: 2em
    overflow: auto

.burger-icon
  margin: 0 0.5em
</style>

<style lang="sass">
.docs .content
  ul
    margin: 1em 3em
    li
      margin: 0.2em 0
  img
    margin: 1em 0
    max-width: 100%
</style>

<style lang="sass">
.drawer
  .ivu-drawer-body
    padding: 0
  .ivu-drawer-wrap
    z-index: 1100
</style>
