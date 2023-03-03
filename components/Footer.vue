<template lang="pug">
IViewFooter.footer
  .lines
    div Released under the
      | !{' '}
      a(:href="license.link", target="_blank") {{license.name}}
    div Copyright © {{releaseYear}}-{{year}} {{author}}
</template>

<script>
import { Footer as IViewFooter } from 'view-ui-plus';
import { license, author, release as releaseYear } from '@/consts/product.json';

export default {
  data() {
    return {
      license,
      author,
      releaseYear,
      year: new Date().getFullYear(),
    };
  },
  components: {
    IViewFooter,
  },
};
</script>

<style lang="sass" scoped>
.footer
  align-self: stretch
  border-top: 1px solid #dcdee2
  text-align: center
  .lines > *
    margin: 0.4em 0
</style>
