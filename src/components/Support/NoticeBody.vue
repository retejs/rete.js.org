<template lang="pug">
.body(v-t9n)
    .text Ваша финансовая помощь способствует развитию данного фреймворка
    img(@click="buttonClick", :src="src")
</template>

<script>
import src from '../../assets/images/patreon.png';

export default {
    props: ['buttonClick'],
    data() {
        return {
            src
        }
    }
}
</script>

<style lang="stylus" lang="sass" scoped>
.body
    display: flex
    .text
        text-align: justify
        margin-right: 1.5em
    img
        height: 30px
        cursor: pointer
</style>