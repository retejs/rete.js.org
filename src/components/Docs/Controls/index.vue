<template lang="pug">
.controls
  h1 Контролы
  p 
    | Контролы (элементы управления) необходимы для того, чтобы позволить вам расширить функциональность узлов. 
    | Вы можете вставить любой HTML-шаблон или сторонний объект (input, select, image, плагин jQuery и т.д.).
  p По умолчанию все контролы отображаются с помощью подключеного рендер плагина (vue-render-plugin, alight-render-plugin), но вы можете создавать и отображать контролы другими способами, используя интерфейсы плагинов.
  p Каждому экземпляру Контрола доступны наследованые методы:
  Code(source="getsetData")
  p Таким образом Контролы могут не только отображать некоторую информацию, но и сохранять данные в узле для дальнейшей обработки.
  Code(source="controlVue")
  p В этом случае Контрол помещает число в данные узла. Может использоваться, когда нет соединения к входу.
  Code(source="control")
  p Чтобы явно указать ренден плагин, который должен отображать контрол, необходимо указать следующее в контрукторе Rete.Control:
  Code this.data.render = 'vue';
</template>

<code name="getsetData">
getData('key')
setData('key', value)
</code>

<code name="controlVue">
const VueNumControl = {
  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
  template: '<input type="number" :readonly="readonly" :value="value" @input="change($event)" @dblclick.stop=""/>',
  data() {
    return {
      value: 0,
    }
  },
  methods: {
    change(e){
      this.value = +e.target.value;
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
</code>

<code name="control">
class NumControl extends Rete.Control {

  constructor(emitter, key, readonly) {
    super(key);
    this.component = VueNumControl;
    this.props = { emitter, ikey: key, readonly };
  }

  setValue(val) {
    this.vueContext.value = val;
  }
}
</code>