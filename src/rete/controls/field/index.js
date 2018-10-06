import { Control } from 'rete';
import VueNumControl from './component.vue';

export class FieldControl extends Control {
    constructor(emitter, key, type, readonly) {
        super(key);
        this.component = VueNumControl;
        this.props = { emitter, ikey: key, type, readonly, change: () => this.onChange() };
    }

    setValue(value) {
        const ctx = this.vueContext || this.props;

        ctx.value = value;
    }

    onChange() {}
}