<template lang="pug">
.app
  Header
  Content
  Footer
</template>

<script>
import loadTranslations from './consts/localization';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default {
  name: 'app',
  inject: ['langService'],
  components: {
    Header,
    Content,
    Footer
  },
  created(){
    this.$setTranslations(loadTranslations())
    this.$setLocale(this.langService.lang)
  }
}
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700')

.app
  display: flex
  min-height: 100vh
  align-items: center
  flex-direction: column
  font-family: Ubuntu
  font-size: 1rem
</style>


