<template lang="pug">
Drawer(
  :value="value"
  @input="$emit('input', $event)"
  :placement="placement"
)
  slot
</template>

<script>
import { Drawer } from 'view-ui-plus';

export default {
  props: {
    value: Boolean,
    placement: String,
  },
  components: {
    Drawer,
  },
  mounted() {
    this.$router.afterEach(() => {
      this.$emit('input', false);
    });
  },
};
</script>

<style lang="sass">
$offset: 60px

.ivu-drawer-mask
  top: $offset
  height: calc(100% - #{$offset})
.ivu-drawer
  top: $offset
.ivu-drawer-body
  padding: 0
</style>
