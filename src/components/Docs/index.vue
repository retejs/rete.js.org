<template lang="pug">
.docs(v-t9n.deep="'docs'" :class="{phone: isPhoneScreen}")
  Menu.menu(width="auto")
    h1.title Документация
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
import Code from '@/shared/Code.vue';
import Drawer from '@/shared/Drawer.vue';
import { app } from '../../main';
import mediaMixin from '../../utils/media.mixin';
import MenuItems from './MenuItems.vue';

app.component('Code', Code);

export default {
  mixins: [mediaMixin],
  data() {
    return {
      drawer: false,
    };
  },
  components: {
    MenuItems,
    Drawer,
  },
};
</script>

<style lang="sass" scoped>
@import '@/assets/styles/media.sass'

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
    .title
      margin: 1em
      +phone
        margin: 0.5em
  .content
    flex: 1
    position: relative
    padding: 2em
    overflow: auto
    +phone
      padding: 5vw

.burger-icon
  margin: 0 0.5em
</style>

<style lang="sass">
@import '@/assets/styles/media.sass'

.docs .content
  ul
    margin: 1em 3em
    +phone
      margin: 0.5em 1.5em
    li
      margin: 0.2em 0
  img
    margin: 1em 0
    max-width: 100%
</style>
