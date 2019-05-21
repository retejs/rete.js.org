<template lang="pug">
Content.content
  router-view
  ToSearch
</template>

<script>
import ToSearch from './ToSearch';

export default {
  components: {
    ToSearch
  }
}
</script>


<style lang="sass" scoped>
.content
  flex: 1
  max-width: 1400px
  align-self: center
  text-align: center
  width: 100%
</style>
