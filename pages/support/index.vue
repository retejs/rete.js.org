<template lang="pug">
.support
  .section
    .title {{ $t('support') }} Rete.js
  .methods
    a.payment.patreon(@click="supportService.goToPatreon()")
      img.logo(src="~/assets/images/patreon.png")
</template>

<script>

export default {
};
</script>

<style lang="sass" scoped>
.support
  width: 100%
.methods
  display: flex
  flex-direction: column
  width: 100%
  max-width: 100vw
  margin: 2em 0
  .payment
    flex: 1
    text-align: center
    .logo
      margin: 1em
    .info
      display: block
      word-wrap: break-word

.patreon .logo
    cursor: pointer
    height: 40px
</style>
