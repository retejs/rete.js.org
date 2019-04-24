<template lang="pug">
.instant-search
  ais-instant-search(
    :search-client="searchClient"
    index-name="common"
  )
    ais-search-box.box
      template(slot-scope="{ currentRefinement, refine }")
        Input(
          suffix="md-search"
          @on-focus="focus = true"
          @on-blur="focus = false"
          v-model="currentRefinement"
          @input="refine($event)"
        )
    ais-hits.hits(v-show="focus")
      template(slot-scope="{ items }")
        .hit(
          v-for="(item, i) in items"
          :key="i"
          :tabindex="i"
          @pointerdown="$router.push(item.path)"
        )
          |{{ item.text }}
</template>


<script>
import algoliasearch from 'algoliasearch/lite';

export default {
  data() {
    return {
      focus: false,
      searchClient: algoliasearch(
        '0S8ITD2OZ2',
        '850c7c3f1bdf218a069f39a5ec4dcc70'
      ),
    };
  },
}
</script>


<style lang="sass">
.instant-search
  .box
    margin: 0 1em
  .hits
    line-height: normal
    background: white
    box-shadow: 0 3px 3px rgba(0,0,0,0.2)
    overflow-y: auto
    max-height: calc(100vh - 6em)
    z-index: 1100
    .hit
      padding: 1em
      width: 220px
      max-height: 150px
      overflow: hidden
</style>
