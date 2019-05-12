<template lang="pug">
.lang
  Select.select.upper(v-model="lang" size="small")
    Option.upper(v-for="lang in list" :value="lang" :key="lang")
      | {{lang}}
</template>

<script>
import Vue from 'vue';
import VueT9N from 'vue-t9n';
import loadTranslations from '../consts/localization';

Vue.use(VueT9N);

export default {
  inject: ['langService'],
  data(){
    return {
      lang: this.langService.lang,
      list: ['ru']
    }
  },
  watch: {
    lang(value){
      this.langService.setLocale(value);
    }
  },
  created() {
    this.langService.$on('setLocale', (v) => this.$setLocale(v));
    this.$setTranslations(loadTranslations())
    this.list = ['ru', ...this.$getLangs().list]
    this.langService.setLocale(this.lang)
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

