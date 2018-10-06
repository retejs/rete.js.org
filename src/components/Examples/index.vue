<template lang="pug">
.examples
  Anchor.links
    AnchorLink(v-for="item in list"
      :key="item.key"
      :href="item.key"
      :title="text[item.key].title | translate"
      )
  router-view
</template>

<script>
import text from '../../consts/examples/text.json';
import list from './list';

export default {
  data() {
    return {
      text,
      list
    }
  }
}
</script>


<style lang="sass" scoped>
.examples
  font-size: 1rem
  text-align: left
  margin: 2em 1em
  .links
    text-shadow: 0 0 5px white
    position: absolute
    left: 2%
    top: auto
    z-index: 5
</style>
