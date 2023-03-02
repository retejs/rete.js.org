<template lang="pug">
IViewFooter.footer
  .lines
    div Released under the
      | !{' '}
      a(:href="license.link", target="_blank") {{license.name}}
    div Copyright © {{releaseYear}}-{{year}} {{author}}
  .links
    Tooltip(v-for="{title, icon, to} of links" :content="title", :key="to")
      Button(size="large" shape="circle" :icon="icon" :to="to" target="_blank")
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
      links: [
        { title: 'GitHub', icon: 'logo-github', to: '//github.com/retejs' },
        { title: 'LinkedIn', icon: 'logo-linkedin', to: '//linkedin.com/in/ni55an/' },
        { title: 'Gitter', icon: 'md-stats', to: '//gitter.im/retejs/Lobby' },
      ],
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
  .links
    margin: 1em 0
    .ivu-btn-circle
      margin: 0 0.4em
      font-size: 24px
</style>
