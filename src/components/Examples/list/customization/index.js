import ContextMenuPlugin from 'rete-context-menu-plugin';
import { NumComponent } from '@/rete/components/num-component';
import { AddComponent } from '@/rete/components/add-component';
import { initialize as init } from '@/rete'
import Node from './Node.vue';
import { FieldControl } from '@/rete/controls/field/index';
// import VueNumControl from '@/rete/controls/field/component.vue';
import Control from './Control.vue';
import data from '@/rete/data/simple.json';
// import template from 'html-loader!./template.html';
import 'style-loader!./style.sass';

class CustomFieldControl extends FieldControl {
    constructor(){
        super(...arguments);
        this.component = Control;
    }
}

class CustomNumComponent extends NumComponent {
    constructor(){
        super(CustomFieldControl);
        this.data = {
            render: 'vue',
            component: Node
        }
    }
}
class CustomAddComponent extends AddComponent {
    constructor(){
        super(CustomFieldControl);
        this.data = {
            render: 'vue',
            component: Node
        }
    }
}

export default async function(container) {
    container.classList.add('custom-node-editor');
    
    const { editor, engine, resize, process } = await init(container)

    editor.use(ContextMenuPlugin);

    [
        new CustomNumComponent, 
        new CustomAddComponent
    ].map(c => {
        editor.register(c);
        engine.register(c);
    });

    await editor.fromJSON(data);

    resize();
    process();
}