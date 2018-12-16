<template lang="pug">
Card.view(v-t9n)
  p(slot="title")
    Icon(type="md-list") Модули
  Button(slot="extra" shape="circle" size="small" icon="md-add" @click="addModule()")
  
  RadioGroup(v-model="module" vertical)
    Radio(v-for="(module, key) in modules" :key="key" :label="key" @click="openModule(key)")
      span {{key}}
</template>


<script>
import Vue from 'vue';

export default {
  props: ['editor', 'modules', 'resize'],
  data() {
    return {
      module: null
    }
  },
  mounted(){
    this.module = 'index.rete';
  },
  watch: {
    async module(curr, prev) {
      if(prev)
        this.modules[prev].data = this.editor.toJSON();
      
      await this.editor.fromJSON(this.modules[curr].data);

      this.editor.trigger('process');
      this.resize();
    }
  },
  methods:{
      initialData(){
        return {id: 'retejs@0.1.0', nodes: {}}
      },
      addModule() {
        Vue.set(this.modules, 'module'+Object.keys(this.modules).length+'.rete', { data: this.initialData()});
        this.$forceUpdate();
      },
      openModule(name) {
        this.module = name;
      }
  }
}
</script>


<style lang="sass" scoped>
.view
  position: absolute
  right: 0
  top: 0
</style>
