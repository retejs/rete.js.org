import { Control } from 'rete';

export class TextControl extends Control {

  constructor(emitter, key, readonly, type = 'text') {
      super();
      this.emitter = emitter;
      this.key = key;
      this.type = type;
      this.template = `<input type="${type}" :readonly="readonly" :value="value" @input="change($event)"/>`;

      this.scope = {
          value: null,
          readonly,
          change: this.change.bind(this)
      };
  }

  onChange() {}

  change(e) {
      this.scope.value = this.type === 'number' ? +e.target.value : e.target.value;
      this.update();
      this.onChange();
  }

  update() {
      if (this.key)
          this.putData(this.key, this.scope.value)
      this.emitter.trigger('process');
      this._alight.scan();
  }

  mounted() {
      this.scope.value = this.getData(this.key) || (this.type === 'number' ? 0 : '...');
      this.update();
  }

  setValue(val) {
      this.scope.value = val;
      if(this._alight)
        this._alight.scan()
  }
}