import ContextMenuPlugin from 'rete-context-menu-plugin';
import { NumComponent } from '@/rete/components/num-component';
import { AddComponent } from '@/rete/components/add-component';
import { initialize as init } from '@/rete'
import data from '@/rete/data/simple.json';

export default async function(container) {
    const { editor, engine, resize, process } = await init(container)

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