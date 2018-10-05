<template lang="pug">
.node
  .title {{node.name}}
  .content
    .column(v-if='node.controls.size > 0 || node.inputs.size > 0')
      .inputs(v-for='input in inputs()')
        Socket(v-socket:input="input", type="input", :socket="input.socket", :used="input.connections.length > 0")
        .input-title(v-show='!input.showControl()') {{input.name}}
        .input-control(v-show='input.showControl()', v-control='input.control')
      .control(v-for='control in controls()',
        style='text-align: center',
        :style='{ width: control.parent.width - 2 * control.margin, height: control.height }',
        v-control='control'
        )
    .column
      .outputs(v-for='output in outputs()')
        .output-title {{output.name}}
        Socket(v-socket:output="output", type="output", :socket="output.socket", :used="output.connections.length > 0")

</template>

<script>
import { mixin } from 'rete-vue-render-plugin';
import Socket from './Socket.vue';

export default {
  mixins: [mixin],
  components: {
    Socket
  }
}
</script>

<style lang="sass" scoped>   
$node-color: rgba(35,35,35,0.7)
$color-active: darken($node-color,5%)
$title-light: rgba(0, 255, 0,0.5)
$title-light-transparent: rgba(0, 255, 0,0.0)
$group-color: rgba(15,80,255,0.2)
$group-handler-size: 40px
$group-handler-offset: -10px
$context-menu-round: 7px
$socket-size: 16px
$socket-margin: 10px

.node
  background: $node-color
  box-shadow: 1px solid black
  border: 1px solid black
  border-radius: 10px
  cursor: pointer
  display: inline-block
  height: auto
  padding-bottom: 6px
  box-sizing: content-box
  box-shadow: 4px 5px 9px rgba(0,0,0,0.5)
  &:hover
    background: $node-color
  &.active
    background: $color-active
    border: 1px solid #ffd252
  .title
    border-top: 1px solid #ccc
    color: white
    text-align: center
    font-weight: bold
    font-family: sans-serif
    font-size: 18px
    border-radius: 10px 10px 0 0
    padding: 8px
    overflow: hidden
    background: linear-gradient(to top, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 40%, rgba(255, 255, 255, 0.19) 100%), radial-gradient(70% 40px at center, $title-light 0%, $title-light-transparent 60%)
  .content
    display: table
    width: 100%
    .column
      display: table-cell
      white-space: nowrap
      &:not(:last-child)
        padding-right: 20px
  .inputs
    text-align: left
  .outputs
    text-align: right
  .input-title,.output-title
    vertical-align: middle
    color: white
    display: inline-block
    font-family: sans-serif
    font-size: 14px
    margin: $socket-margin 0
    line-height: $socket-size
  .input-control
    z-index: 1
    vertical-align: middle
    display: inline-block
  .control
    width: 100%
    padding: $socket-margin $socket-size/2 + $socket-margin
</style>
