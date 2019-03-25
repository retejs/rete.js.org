import ContextMenuPlugin from 'rete-context-menu-plugin';
import DockPlugin from 'rete-dock-plugin';
import VueRenderPlugin from 'rete-vue-render-plugin';
import { NumComponent } from '@/rete/components/num-component';
import { AddComponent } from '@/rete/components/add-component';
import { initialize as init } from '@/rete'
import data from '@/rete/data/simple.json';
import './styles.sass';

export default async function(container, extra) {
    const { editor, engine, resize, process } = await init(container)

    extra.classList.add('dock-menu');

    editor.use(ContextMenuPlugin);
    editor.use(DockPlugin, {
        container: extra,
        plugins: [VueRenderPlugin]
    });

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