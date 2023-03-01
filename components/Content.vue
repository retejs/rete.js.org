<template lang="pug">
IViewContent.content
  router-view
</template>

<script>
import { Content as IViewContent } from 'view-ui-plus';

export default {
  components: {
    IViewContent,
  },
};
</script>

<style lang="sass" scoped>
.content
  flex: 1
  max-width: auto
  align-self: center
  text-align: center
  width: 100%
</style>
