<template lang="pug">
.examples
  .example(v-for="(item, i) in list")
    .text 
      router-link.title(:to="'#'+item.key") {{item.title}}
      | {{descriptions[item.key]}}
    .view
      div(:ref="item.key")
</template>

<script>
import descriptions from '../../consts/examples/descriptions.json';
import list from './list';

export default {
  data(){
    return {
      list,
      descriptions
    }
  },
  async mounted() {
    this.list.map(item => item.init(this.$refs[item.key][0]));
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
    &:nth-child(odd)
      flex-direction: row-reverse
    +phone
      flex-direction: column !important
    .title
      display: block
      font-size: 120%
      margin-bottom: 1em
    .text
      flex: 1
      padding: 2em
    .view
      flex: 2
      overflow: hidden
      max-height: 80vh
      min-height: 50vh
      +phone
        max-height: 60vh
</style>
