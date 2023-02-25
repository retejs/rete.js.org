<template lang="pug">
.example
  Info(:item="example")
  .view
    div(ref="view")
    div(ref="extra")
</template>

<script>
import Info from './Info.vue';

export default {
  props: ['example'],
  methods: {
    async init() {
      this.$refs.view.innerHTML = '';
      this.$refs.extra.innerHTML = '';
      this.$refs.extra.className = '';

      if (this.editor) this.editor.destroy();
      if (this.engine) this.engine.destroy();

      const { editor, engine } = await this.example.init(this.$refs.view, this.$refs.extra);

      this.editor = editor;
      this.engine = engine;
    },
  },
  data() {
    return {
      editor: null,
      engine: null,
    };
  },
  mounted() {
    this.init();
  },
  updated() {
    this.init();
  },
  components: {
    Info,
  },
};
</script>

<style lang="sass" scoped>
@import '../../assets/styles/media.sass'

.example
  display: flex
  max-width: 100%
  margin: 2vh 0
  flex-direction: row-reverse
  +phone
    flex-direction: column !important
  .title
    display: block
    font-size: 120%
    margin-bottom: 1em
  .view
    flex: 2
    position: relative
    overflow: hidden
    max-height: 80vh
    min-height: 50vh
    +phone
      max-height: 60vh
</style>
