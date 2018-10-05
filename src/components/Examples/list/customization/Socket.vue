<template lang="pug">
.socket(
  :class="[type, socket.name, used ? 'used' : ''] | kebab",
  :title="socket.name+'\\n'+socket.hint"
)
  
</template>


<script>
import { Socket } from 'rete-vue-render-plugin';

export default {
  extends: Socket,
  props: ['used']
}
</script>


<style lang="sass" scoped>
$socket-size: 16px
$socket-margin: 10px

.socket
  display: inline-block
  cursor: pointer
  border: 2px solid white
  border-radius: $socket-size/2.0
  width: $socket-size
  height: $socket-size
  margin: $socket-margin !important
  vertical-align: middle
  background: transparent
  position: relative
  z-index: 2
  &.used
    background: white
  &:after
    content: ''
    position: absolute
    width: 0
    height: 0
    top: $socket-size/4-1px
    left: $socket-size
    display: inline-block
    border-style: solid
    border-width: $socket-size/4 0 $socket-size/4 $socket-size/6
    border-color: transparent transparent transparent white
  &:hover
    border: 2px solid #777
  &.multiple
    border-color: yellow
</style>
