<template lang="pug">
.node(@mouseover="always = true" @mouseleave="always = false" v-t9n.deep="'docs'")
  Tooltip.title(placement="top" :always="always" offset="12px" @click.native="go('nodes')") Lorem Ipsum
    template(slot="content") Узел
  .output
    .title dolor
    Tooltip.socket(placement="right" :always="always" @click.native.stop="go('sockets')")
      template(slot="content") Сокет выхода
  .control
    Tooltip.input(placement="right" :always="always" @click.native.stop="go('controls')")
      template(slot="content") Контрол
  .input
    Tooltip.socket(placement="left" :always="always" @click.native.stop="go('sockets')")
      template(slot="content") Сокет входа
    .title sit amet
      template(slot="content") Название входа
</template>

<script>

export default {
  data() {
    return {
      always: false,
    }
  },
  methods: {
    go(section) {
      this.$router.push(`/docs/${section}`);
    }
  },
  mounted() {
    setTimeout(() => this.always = true, 500);
  }
};
</script>

<style lang="sass" scoped>
.node
  margin: 3em 7em
  background: rgba(110, 136, 255, 0.8)
  border: 0px solid #4e58bf
  border-radius: 10px
  width: 180px
  height: auto
  padding: 1px 0
  box-sizing: border-box
  user-select: none
  .title
    color: white
    font-size: 16px
    height: 8px
    margin: 6px 12px
    display: inline-block
  .control
    padding: 6px 16px
    .input
      border-radius: 20px
      height: 24px
      width: 100%
      background: white
  .output,.input
    width: 100%
    padding: 2px
    .socket
      border-radius: 100%
      display: inline-block
      border-radius: 12px
      width: 24px
      height: 24px
      margin: 6px
      vertical-align: middle
      background: #96b38a
  .output
    text-align: right
  .input .socket
    margin-left: -12px
  .output .socket
    margin-right: -12px
    margin-left: auto

  & > .title, .socket, .control
    cursor: pointer
</style>
