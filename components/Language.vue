<template lang="pug">
Affix.lang(relative-element-selector=".content")
  client-only
    Select.select.upper(
      :model-value="$i18n.locale"
      @on-change="$i18n.setLocale($event)"
      size="small"
    )
      Option.upper(v-for="lang in $i18n.locales" :value="lang.code" :key="lang.code")
        | {{lang.code}}
    template(#placeholder)
      SsrSelect {{ $i18n.locale }}
</template>

<script>
import { defineComponent } from 'vue';
import SsrSelect from './ssr/SsrSelect.vue';

export default defineComponent({
  components: {
    SsrSelect,
  },
});
</script>

<style lang="sass" scoped>
.lang
  float: right
  padding-right: 1em
  .select
    width: 4em
  .upper
    text-transform: uppercase

.affix
  top: 0px !important
  right: 0px
</style>
