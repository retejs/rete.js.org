<template lang="pug">
.instant-search
  ais-instant-search(
    :search-client="searchClient"
    index-name="common"
  )
    ais-search-box.box
      Icon(slot="submit-icon" type="md-search")
      template(slot-scope="{ currentRefinement, refine }")
        Input(
          suffix="md-search"
          @on-focus="focus = true"
          @on-blur="focus = false"
          v-model="currentRefinement"
          @input="refine($event)"
        )
    ais-hits.hits(v-if="focus")
      template(slot-scope="{ items }")
        .hit(v-for="(item, i) in items" :key="i") {{ item.field }}
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
$radius: 1em
$bg: #eee

.instant-search
  .box
    margin: 0 1em
  .hits
    line-height: normal
    background: white
    box-shadow: 0 3px 3px rgba(0,0,0,0.2)
    border-radius: 1em
    .hit
      padding: 1em
</style>
