<template lang="pug">
.plugins(v-t9n.deep="'docs'")
  h1 Плагины
  Tabs(:value="tab", @on-click="open($event)" :animated="false")
    TabPane(v-for="item in list" :key="item.path" :name="item.path" :label="sentence(item.path)")
  h2.title
    | {{sentence(tab)}}
    a(:href="'https://www.npmjs.com/package/rete-'+tab+'-plugin'" target="_blank")
      img.badge(:src="'https://img.shields.io/npm/v/rete-'+tab+'-plugin.svg'" alt="npm version")
  router-view
</template>


<script>
import { sentence } from 'case';
import list from './list/index';

export default {
  data() {
    return {
      list,
      sentence
    }
  },
  computed: {
    tab() {
      return this.$route.meta.name;
    }
  },
  methods: {
    open(name) {
      this.$router.push('/docs/plugins/'+name)
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
