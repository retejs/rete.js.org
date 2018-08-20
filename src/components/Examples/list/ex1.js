import { NumComponent } from '../../../rete/components/num-component';
import { AddComponent } from '../../../rete/components/add-component';
import { initialize as init } from '../../../rete'

export default async function(container) {
    const components = [new NumComponent(), new AddComponent()];

    const { editor, /*engine,*/ resize, process } = await init(container, components)

    try {
        editor.silent = true;
        const n1 = await components[0].createNode({num: 2});
        const n2 = await components[0].createNode({num: 0});
        const add = await components[1].createNode();

        n1.position = [80, 200];
        n2.position = [80, 400];
        add.position = [500, 240];

        editor.addNode(n1);
        editor.addNode(n2);
        editor.addNode(add);

        editor.connect(n1.outputs.get('num'), add.inputs.get('num1'));
        editor.connect(n2.outputs.get('num'), add.inputs.get('num2'));
    } finally {
        editor.silent = false;
    }

    resize();
    process();
}