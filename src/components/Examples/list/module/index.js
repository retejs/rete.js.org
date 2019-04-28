import ContextMenuPlugin from 'rete-context-menu-plugin';
import ModulePlugin from 'rete-module-plugin';
import { NumComponent } from '@/rete/components/num-component';
import { AddComponent } from '@/rete/components/add-component';
import { InputComponent } from '@/rete/components/input-component';
import { ModuleComponent } from '@/rete/components/module-component';
import { OutputComponent } from '@/rete/components/output-component';
import { initialize as init } from '@/rete'
import createController from './controller';
import modules from '@/rete/data/module.json';

export default async function(container) {
    const { editor, engine, resize, process } = await init(container)
    
    editor.use(ContextMenuPlugin);
    editor.use(ModulePlugin, { engine, modules });

    [
        new NumComponent, 
        new AddComponent,
        new InputComponent, 
        new ModuleComponent,
        new OutputComponent
    ].map(c => {
        editor.register(c);
        engine.register(c);
    });

    createController(container, { editor, modules, resize });

    resize();
    process();

    return { editor, engine }
}