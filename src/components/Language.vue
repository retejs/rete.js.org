<template lang="pug">
Affix.lang(relative-element-selector=".content")
  Select.select.upper(
    :value="langService.lang"
    @on-change="langService.setLocale($event)"
    size="small"
  )
    Option.upper(v-for="lang in this.langService.langs" :value="lang" :key="lang")
      | {{lang}}
</template>

<script>
import Vue from 'vue';
import VueT9N from 'vue-t9n';
import loadTranslations from '../consts/localization';
import { Affix } from 'vue-affix';

Vue.use(VueT9N);

export default {
  inject: ['langService'],
  created() {
    this.langService.$on('setLocale', (v) => this.$setLocale(v));

    this.$setTranslations(loadTranslations());

    this.langService.setLangs(['ru', ...this.$getLangs().list]);
    this.langService.setLocale(this.langService.getLocale());
  },
  components: {
    Affix
  }
}
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

