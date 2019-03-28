<template lang="pug">
.node(:class="[selected(), node.name] | kebab", :style="{opacity: node.data.importance}")
  .row
    // Inputs
    .input(v-for='input in inputs()')
      Socket(v-socket:input="input", type="input", :socket="input.socket")
      .input-title(v-show='!input.showControl()') 
      .input-control(
        v-show='input.showControl()'
        v-control="input.control"
      )
    img.image(:src="require('../../../../assets/images/npm.svg')")
    // Outputs
    .output(v-for='output in outputs()')
      .output-title
      Socket(v-socket:output="output", type="output", :socket="output.socket")
  .row(vertical)
    a(:href="'https://www.npmjs.com/package/'+node.data.name" target="_blank")
      img.shield(:src="'https://img.shields.io/npm/v/'+node.data.name+'.svg'")
    .name {{node.data.name}}
</template>

<script>
import VueRender from 'rete-vue-render-plugin';

export default {
  mixins: [VueRender.mixin],
  components: {
    Socket: VueRender.Socket
  }
}
</script>

<style lang="sass" scoped>
$color: #cb3837
  
.node
  background: $color
  border-radius: 0
  border: none
  .row
    display: flex
    &[vertical]
      flex-direction: column
  &:hover
    background: $color
  .image
    height: 100px
    width: 260px
    flex: 1
  .inputs, .outputs
    margin-top: 1em
  .name
    text-align:: center
    color: white
    font-size: 42px
    margin: 0.2em 0.7em
  .shield
    display: block
    margin: 1em auto
    height: 20px
</style>
