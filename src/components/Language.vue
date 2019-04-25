<template lang="pug">
.lang
  Select.select.upper(v-model="lang" size="small")
    Option.upper(v-for="lang in list" :value="lang" :key="lang")
      | {{lang}}
</template>

<script>
export default {
  inject: ['langService'],
  data(){
    return {
      lang: this.langService.lang,
      list: ['ru', ...this.$getLangs().list]
    }
  },
  watch: {
    lang(value){
      this.$setLocale(value);
      this.langService.setLocale(value);
    }
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

