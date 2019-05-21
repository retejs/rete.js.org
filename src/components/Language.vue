<template lang="pug">
.lang
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

Vue.use(VueT9N);

export default {
  inject: ['langService'],
  created() {
    this.langService.$on('setLocale', (v) => this.$setLocale(v));

    this.$setTranslations(loadTranslations());

    this.langService.setLangs(['ru', ...this.$getLangs().list]);
    this.langService.setLocale(this.langService.getLocale());
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
</style>

