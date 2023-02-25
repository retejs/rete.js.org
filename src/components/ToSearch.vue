<template lang="pug">
div.select-tooltip(
  v-if="this.searchService.rect"
  v-t9n.deep
  content="Top Left text"
  placement="bottom"
  always="true"
  :style="style"
)
  button(
    slot="content"
    type="primary"
    @click="copy"
  ) Скопировать ссылку
</template>

<script>
import copy from 'clipboard-copy';

export default {
  inject: ['searchService'],
  computed: {
    style() {
      const {
        top, left, width, height,
      } = this.searchService.rect;

      return {
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        height: `${height}px`,
      };
    },
  },
  methods: {
    copy() {
      copy(window.location.toString());
      this.searchService.rect = null;
    },
  },
};
</script>

<style lang="sass" scoped>
.select-tooltip
  position: fixed
</style>
