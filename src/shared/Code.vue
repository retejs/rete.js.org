<template lang="pug">
pre(v-highlightjs="code")
  code(:class="{[lang]: true}")
</template>


<script>
import micromustache from 'micromustache';

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
  computed: {
    code() {
      return this.translate(micromustache.render(this.template, this.view));
    }
  },
  methods: {
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
      this.code = this.$slots.default[0].text;
    else if(this.source)
      this.template = this.getParentCode(this.$parent, this.source);

    // if(!this.code)
      // throw new Error(`Slot or source ${this.source} not found`);
    
  }
}
</script>


<style lang="sass" scoped>

</style>
