<template lang="pug">
Footer.footer
  .lines
    div Released under the {{license}}
    div Copyright © {{release}}-2018 {{author}}
  .links
    Tooltip(v-for="{title, icon, to} of links" :content="title", :key="to")
      Button(size="large" shape="circle" :icon="icon" :to="to" target="_blank")
</template>


<script>
import { license, author, release } from '../consts/product.json';

export default {
  data(){
    return {
      license,
      author,
      release,
      links: [
        { title: 'GitHub', icon: 'logo-github', to: '//github.com/retejs' },
        { title: 'LinkedIn', icon: 'logo-linkedin', to: '//linkedin.com/in/ni55an/' },
        { title: 'Gitter', icon: 'md-stats', to: '//gitter.im/retejs/Lobby' }
      ]
    }
  }
}
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
