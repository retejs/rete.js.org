<template lang="pug">
iframe(:src="'https://codesandbox.io/embed/' + id + '?autoresize=1&hidedevtools=1&fontsize=11&hidenavigation=1&module=' + module + '&theme=light&view=split'"
     title="Rete.js v2"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
)
</template>

<script>
export default {
  props: ['id', 'module'],
  mounted() {
    console.log(this.id, this.module);
  },
};
</script>

<style lang="sass" scoped>
iframe
  width: 80vw
  height: 30vw
  border: none
  text-align: left
  border: 2px solid #f3f3f3
  border-radius: 0.7em
</style>
