<template lang="pug">
pre(v-highlightjs="code")
  code(:class="{[lang]: true}")
</template>


<script>
import * as sources from '@/consts/code';

export default {
  props: {
    lang: {
      type: String,
      default: 'javascript'
    },
    source: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      code: '',
    }
  },
  mounted() {
    if(this.$slots.default)
      this.code = this.$slots.default[0].text;
    else if(this.source)
      this.code = sources[this.source];
    else
      throw new Error('Slot or source not defined')
  }
}
</script>


<style lang="sass" scoped>

</style>
