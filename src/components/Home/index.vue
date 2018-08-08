<template lang="pug">
.home
  p.description {{'JavaScript фреймворк для визуального программирования' | translate}}
  Logo.logo
  p.links Github
</template>

<script>
import Logo from '../Logo';

export default {
  components: {
    Logo
  }
}
</script>


<style lang="sass" scoped>
.home
  .description
    margin-top: 10vh
  .logo
    margin: calc(1vw + 5vh)
  .links
    margin-bottom: 10vh
</style>
