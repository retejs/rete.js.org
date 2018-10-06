import { Component, Input, Output } from 'rete';
import Socket from '../../../sockets';
import component from './Component.vue';
import 'style-loader!./style.sass';

export class PackageComponent extends Component {

    constructor() {
        super("Package");
        this.data.component = component;
    }

    builder(node) {
        var out = new Output('pkg', "Package", Socket.package);
        var inp = new Input('pkg', "Package", Socket.package, true);

        return node.addInput(inp).addOutput(out);
    }
}