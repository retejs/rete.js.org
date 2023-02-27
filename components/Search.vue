<template lang="pug">
.search(ref="container")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import docsearch from '@docsearch/js';
import '@docsearch/css';

export default defineComponent({
  mounted() {
    const { container } = this.$refs;

    docsearch({
      container,
      appId: 'Q275UHBHP7',
      indexName: 'rete-js',
      apiKey: 'dac415d28248192348d29069416e0870',
    });
  },
});
</script>

<style lang="sass">
:root
  --docsearch-primary-color: #ffd92c
  --docsearch-highlight-color: #8ba0ff

.DocSearch-Button
  border: 1px solid #dcdee2
  border-radius: 4px
  background: white
  height: 32px
  width: 205px
  margin: 14px

.DocSearch-Button-Keys
  transform: scale(0.7)
  transform-origin: 0

.DocSearch-Button-Placeholder
  display: none

.DocSearch-Search-Icon
  --docsearch-text-color: grey
  transform: scale(0.6)

.search > *
  display: inline-flex
  vertical-align: middle
  flex-direction: row-reverse
</style>
