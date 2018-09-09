<template lang="pug">
.support
  .section
    .title {{'Пожертвовать Rete.js' | translate}}
  .methods
    a.payment.liqpay(:href="liqpay", target="_blank")
      img.logo(src="../../assets/images/LIQPAY.svg")
    Divider
    a.payment.patreon(:href="patreon", target="_blank")
      img.logo(src="../../assets/images/patreon.png")
    Divider
    .payment.bitcoin
      img.logo(src="../../assets/images/bitcoin.svg")
      h2.info 
        | Bitcoin: 
        br 
        | {{btc}}
      img.qr(src="../../assets/images/btc-qr.png")
</template>

<script>
import { liqpay, patreon, btc } from '../../consts/support.json';

export default {
  data(){
    return {
      liqpay,
      patreon,
      btc
    }
  }
}
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

.liqpay .logo
    height: 40px
.patreon .logo
    height: 40px
.bitcoin
  .logo
    height: 70px
  .qr
    display: block
    max-width: 80vw
    margin: auto
</style>
