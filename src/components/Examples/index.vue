<template lang="pug">
.examples
  Tabs(v-model="tab", @on-click="open(tab)", :animated="false")
    TabPane(v-for="item in list"
      :key="item.key"
      :name="item.key"
      :label="(getText(item.key).title)"
      icon="md-arrow-forward"
      )
  router-view(:example="example")
</template>

<script>
import getText from './text';
import list from './list';

export default {
  data() {
    return {
      list,
      tab: this.$route.params.key,
    };
  },
  computed: {
    example() {
      return list.find((i) => i.key === this.tab);
    },
  },
  methods: {
    getText,
    open(key) {
      this.$router.push(key);
    },
  },
};
</script>

<style lang="sass" scoped>
.examples
  text-align: left
  margin: 2em 1em
  .links
    text-shadow: 0 0 5px white
    position: absolute
    left: 2%
    top: auto
</style>
