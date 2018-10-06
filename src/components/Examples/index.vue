<template lang="pug">
.examples
  Tabs(v-model="tab", @on-click="open(tab)", :animated="false")
    TabPane(v-for="item in list"
      :key="item.key" 
      :name="item.key"
      :label="text[item.key].title | translate"
      icon="md-arrow-forward"
      )
  router-view(:example="tab")
</template>

<script>
import text from '../../consts/examples/text.json';
import list from './list';

export default {
  data() {
    return {
      text,
      list,
      tab: this.$route.params.key
    }
  },
  methods: {
    open(key) {
      this.$router.push(key)
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
</style>
