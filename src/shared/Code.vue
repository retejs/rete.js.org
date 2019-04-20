<template lang="pug">
pre(v-highlightjs="code()")
  code(:class="{[lang]: true}")
</template>


<script>
import Vue from 'vue';
import micromustache from 'micromustache';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS);

export default {
  props: {
    lang: {
      type: String,
      default: 'javascript'
    },
    source: {
      type: String,
      default: null
    },
    view: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      template: ''
    }
  },
  methods: {
    code() {
      return this.translate(micromustache.render(this.template, this.view));
    },
    getParentCode(parent, name) {
      const { code } = parent.$options;
      const { $parent } = parent;

      return code && code[name] || $parent && this.getParentCode($parent, name);
    },
    translate(code) {
      return code.replace(/(\/{2,}\s*)(.+)/g, (m, g1, g2) => {
        return g1+this.$t(g2);
      });
    }
  },
  mounted() {
    if(this.$slots.default)
      this.template = this.$slots.default[0].text;
    else if(this.source)
      this.template = this.getParentCode(this.$parent, this.source);

    // if(!this.code)
      // throw new Error(`Slot or source ${this.source} not found`);
    
  }
}
</script>

<style lang="sass">
@import '~highlight.js/styles/atom-one-dark.css'
.hljs-comment
  color: #93c700
</style>
