import { NodeEditor, Engine } from 'rete';
import ConnectionPlugin from 'rete-connection-plugin';
import AlightRenderPlugin from 'rete-alight-render-plugin';
import AreaPlugin from 'rete-area-plugin';

export async function initialize(container, components) {
    const editor = new NodeEditor('retejs@0.1.0', container);

    editor.use(ConnectionPlugin);
    editor.use(AlightRenderPlugin);
    editor.use(AreaPlugin);

    const engine = new Engine('retejs@0.1.0');
    
    components.map(c => {
        editor.register(c);
        engine.register(c);
    });
    

    editor.on('process nodecreated noderemoved connectioncreated connectionremoved', async () => {
        if(editor.silent) return;
        
        await engine.abort();
        await engine.process(editor.toJSON());
    });

    return {
        editor,
        engine,
        resize() {
            editor.view.resize();
            AreaPlugin.zoomAt(editor);
        },
        process(){ 
            editor.trigger('process');
        }
    }
}