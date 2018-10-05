import ContextMenuPlugin from 'rete-context-menu-plugin';
import AreaPlugin from 'rete-area-plugin';
import { NumComponent } from '@/rete/components/num-component';
import { AddComponent } from '@/rete/components/add-component';
import { initialize as init } from '@/rete'
import { FieldControl } from '@/rete/controls/field/index';
import Control from './Control.vue';
import Node from './Node.vue';
import data from '@/rete/data/simple.json';
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

    const background = document.createElement('div');
    background.classList = 'background';

    editor.use(ContextMenuPlugin);
    editor.use(AreaPlugin, { background });

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