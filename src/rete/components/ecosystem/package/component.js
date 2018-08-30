import { Component, Input, Output } from 'rete';
import Socket from '../../../sockets';
import template from 'html-loader?interpolate!./package.html';
import 'style-loader!./package.sass';

export class PackageComponent extends Component {

    constructor() {
        super("Package");
        this.data = {
            template
        }
    }

    builder(node) {
        var out = new Output('pkg', "Package", Socket.package);
        var inp = new Input('pkg', "Package", Socket.package, true);

        return node.addInput(inp).addOutput(out);
    }
}