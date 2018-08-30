import ContextMenuPlugin from 'rete-context-menu-plugin';
import { NumComponent } from '@/rete/components/num-component';
import { AddComponent } from '@/rete/components/add-component';
import { initialize as init } from '@/rete'
import data from '@/rete/data/simple.json';
import template from 'html-loader!./template.html';
import 'style-loader!./style.sass';

export default async function(container) {
    container.classList.add('custom-node-editor');
    
    const { editor, engine, resize, process } = await init(container, {}, { template })

    editor.use(ContextMenuPlugin);

    [
        new NumComponent, 
        new AddComponent
    ].map(c => {
        editor.register(c);
        engine.register(c);
    });

    await editor.fromJSON(data);

    resize();
    process();
}