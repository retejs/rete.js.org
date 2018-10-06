<template lang="pug">
.example
  Info(:item="item")
  .view
    div(ref="view")
</template>


<script>
import Info from './Info';
import list from './list';

export default {
  props: ['example'],
  computed: {
    item() {
      return list.find(i => i.key === this.example)
    }
  },
  methods: {
    init() {
      this.$refs.view.innerHTML = '';
      this.$refs.view.className = '';
      this.item.init(this.$refs.view);
    }
  },
  mounted() {
    this.init();
  },
  updated() {
    this.init(); 
  },
  components: {
    Info
  }
}
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
