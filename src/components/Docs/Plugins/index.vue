<template lang="pug">
.plugins
  h1 Плагины
  Tabs(:value="tab", @on-click="open($event)" :animated="false")
    TabPane(v-for="item in list" :key="item" :name="item" :label="sentence(item)")
      h2.title
        | {{sentence(item)}}
        a(:href="'https://www.npmjs.com/package/rete-'+item+'-plugin'")
          img.badge(:src="'https://img.shields.io/npm/v/rete-'+item+'-plugin.svg'" alt="npm version")
</template>


<script>
import list from './list';
import { sentence } from 'case';

export default {
  data() {
    return {
      list,
      sentence
    }
  },
  computed: {
    tab() {
      return this.$route.params.name
    }
  },
  methods: {
    open(key) {
      this.$router.push('/docs/plugins/'+key)
    }
  }
}
</script>


<style lang="sass" scoped>
.plugins
  .title
    margin: 0em
  .badge
    vertical-align: middle
    margin: 0.2em 1em
    height: 1em
</style>
