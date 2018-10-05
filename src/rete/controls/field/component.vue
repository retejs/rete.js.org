<template>
<input
  :type="type || 'text'"
  :readonly="readonly"
  :value="value"
  @input="change($event)"
  />
</template>

<script>
export default {
  props: ['initial', 'readonly', 'emitter', 'ikey', 'type', 'getData', 'putData'],
  data() {
    return {
      value: this.initial || 0,
    }
  },
  methods: {
    parse(value) {
      return this.type === 'number' ? +value : value;
    },
    change(e){
      this.value = this.parse(e.target.value);
      this.update();
    },
    update() {
      if (this.ikey)
        this.putData(this.ikey, this.value)
      this.emitter.trigger('process');
    }
  },
  mounted() {
    this.value = this.getData(this.ikey);
  }
}
</script>


<style lang="sass" scoped>
input
  width: 100%
  border-radius: 30px
  background-color: white
  padding: 2px 6px
  border: 1px solid #999
  font-size: 110%
  width: 170px
</style>
