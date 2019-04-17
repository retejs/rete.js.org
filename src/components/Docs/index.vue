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
import VueHighlightJS from 'vue-highlightjs';
import mediaMixin from '../../utils/media.mixin';
import MenuItems from './MenuItems';

Vue.use(VueHighlightJS);

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

<style lang="sass">
@import '~highlight.js/styles/atom-one-dark.css'
.hljs-comment
  color: #93c700
</style>

<style lang="sass" scoped>
.docs
  display: flex
  text-align: left
  &.phone
    flex-direction: column
    .menu
      width: 100%
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
</style>
