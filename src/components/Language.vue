<template lang="pug">
Affix.lang(relative-element-selector=".content")
  Select.select.upper(
    :model-value="langService.lang"
    @on-change="langService.setLocale($event)"
    size="small"
  )
    Option.upper(v-for="lang in this.langService.langs" :value="lang" :key="lang")
      | {{lang}}
</template>

<script lang="ts">
import { watch, defineComponent } from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import LangService from '../services/i18n';
// import Vue from 'vue';
// import { Affix } from 'vue-affix';
// import loadTranslations from '../consts/localization';

export default defineComponent({
  inject: ['langService'],
  created() {
    if (!this.langService) return;
    const langService = this.langService as LangService;

    watch((langService as LangService).lang$, (v) => {
      // this.$setLocale(v)
    });

    // this.$setTranslations(loadTranslations());

    // this.langService.setLangs(['ru', ...this.$getLangs().list]);
    langService.setLocale(langService.getLocale());
    langService.setLocale('ru');
  },
  components: {
    // Affix,
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
