<template lang="pug">
.links
  a.link(v-for="{title, icon, to} of links" :href="to" target="_blank")
    Tooltip(:content="title", :key="to")
      font-awesome-icon(:icon="['fa-brands', icon]")

</template>

<script>
import { social } from '@/consts/product.json';

export default {
  data() {
    return {
      links: social,
    };
  },
};
</script>

<style lang="sass" scoped>
.links
  .link
    color: #7f7f7f
    margin: 0 0.35em
    font-size: 1.5em
    &:hover
      color: #cccccc
</style>
