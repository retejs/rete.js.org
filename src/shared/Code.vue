<template lang="pug">
pre(v-highlightjs, :lang="lang")
  code.javascript {{code()}}
</template>

<script>
import { render } from 'micromustache';
import VueHighlightJS from 'vue3-highlightjs';
import html from 'highlight.js/lib/languages/xml';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import { app } from '../main';

app.use(VueHighlightJS, {
  languages: {
    bash,
    css,
    javascript,
    html,
  },
});

export default {
  props: {
    lang: {
      type: String,
      default: 'javascript',
    },
    source: {
      type: String,
      default: null,
    },
    view: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      template: '',
    };
  },
  methods: {
    code() {
      return this.translate(render(this.template, this.view));
    },
    getParentCode(parent, name) {
      // eslint-disable-next-line no-underscore-dangle
      const code = parent._.type.__code;
      const { $parent } = parent;

      return code && code[name] || $parent && this.getParentCode($parent, name);
    },
    translate(code) {
      return code;// .replace(/(\/{2,}\s*)(.+)/g, (m, g1, g2) => g1 + this.$t(g2));
    },
  },
  mounted() {
    if (this.$slots.default) {
      this.template = this.$slots.default()[0].children;
    } else if (this.source) {
      this.template = this.getParentCode(this.$parent, this.source);
    }

    // if(!this.code)
    // throw new Error(`Slot or source ${this.source} not found`);
  },
};
</script>

<style lang="sass">
@import '~highlight.js/styles/atom-one-dark.css'
.hljs-comment
  color: #93c700
</style>
