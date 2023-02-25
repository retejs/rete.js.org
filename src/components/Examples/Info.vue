<template lang="pug">
.info(v-t9n.deep='')
  router-link.title(:to="item.key")
    template {{text.title}}
  Card.packages-card(:title="('Пакеты')" :padding="0" shadow)
    CellGroup
      Cell(v-for="pkg in item.packages" :title="pkg", :key="pkg" :to="'https://www.npmjs.com/package/'+pkg" target="_blank")
        img(:src="'https://img.shields.io/npm/v/'+pkg+'.svg'" slot="extra"  alt="npm version" height="22")
  p {{text.description}}
</template>

<script>
import getText from './text';

export default {
  props: {
    item: Object,
  },
  computed: {
    text() {
      return getText(this.item.key);
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../../assets/styles/media.sass'

.info
  flex: 1
  padding: 2em
  .title
    font-size: 120%
  .packages-card
    margin: 2em 0
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2)
    .packages
      .package
        margin-right: 1em
</style>
