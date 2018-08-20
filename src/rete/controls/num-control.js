import { Control } from 'rete';

export class NumControl extends Control {

    constructor(emitter, key, readonly) {
        super();
        this.emitter = emitter;
        this.key = key;
        this.template = '<input type="number" :readonly="readonly" :value="value" @input="change($event)" @mousedown.stop/>';

       this.scope = {
            value: 0,
            readonly,
            change: this.change.bind(this)
        };
    }

    change(e){
        this.scope.value = +e.target.value;
        this.update();
    }

    update(){
        if(this.key)
            this.putData(this.key, this.scope.value)
        this.emitter.trigger('process');
        this._alight.scan();
    }

    mounted() {
        this.scope.value = this.getData(this.key) || 0;
        this.update();
    }

    setValue(val) {
        this.scope.value = val;
        this._alight.scan()
    }
}