<template lang="pug">
.components 
  .viewer(ref="viewer")
</template>

<script>
import initViewer from './viewer';

export default {
  async mounted(){
    await initViewer(this.$refs.viewer);
  }
}
</script>


<style lang="sass" scoped>
.components
  text-align: left
  min-width: 80vw
  .viewer
    min-height: 70vh
</style>
