<template lang="pug">
.examples
  .example(v-for="(item, i) in list")
    Info(:item="item")
    .view
      div(:ref="item.key")
</template>

<script>
import list from './list';
import Info from './Info';

export default {
  data(){
    return {
      list
    }
  },
  async mounted() {
    this.list.map(item => item.init(this.$refs[item.key][0]));
  },
  components: {
    Info
  }
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/media.sass'

.examples
  font-size: 1rem
  text-align: left
  margin: 2em 1em
  .example
    display: flex
    max-width: 100%
    margin: 6vh 0
    &:nth-child(odd)
      flex-direction: row-reverse
    +phone
      flex-direction: column !important
    .title
      display: block
      font-size: 120%
      margin-bottom: 1em
    .view
      flex: 2
      position: relative
      overflow: hidden
      max-height: 80vh
      min-height: 50vh
      +phone
        max-height: 60vh
</style>
