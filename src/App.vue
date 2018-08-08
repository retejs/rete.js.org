<template lang="pug">
.app
  Header
  Content
</template>

<script>
import Header from './components/Header';
import Content from './components/Content';

export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    Header,
    Content
  }
}
</script>

<style lang="sass" scoped>
.app
  display: flex
  min-height: 100vh
  align-items: center
  flex-direction: column
  font-size: 2em
</style>


