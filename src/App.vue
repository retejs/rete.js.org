<template lang="pug">
.app
  Header
  Content
  Footer
</template>

<script>
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    Header,
    Content,
    Footer
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
</style>


