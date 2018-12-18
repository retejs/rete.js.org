<template lang="pug">
pre(v-highlightjs="code")
  code(:class="{[lang]: true}")
</template>


<script>
import * as sources from '@/consts/code';

export default {
  props: ['lang', 'source'],
  data() {
    return {
      code: '',
    }
  },
  mounted() {
    this.code = sources[this.source];
  }
}
</script>


<style lang="sass" scoped>

</style>
