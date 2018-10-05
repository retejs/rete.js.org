import { NodeEditor, Engine } from 'rete';
import ConnectionPlugin from 'rete-connection-plugin';
import VueRenderPlugin from 'rete-vue-render-plugin';
import AreaPlugin from 'rete-area-plugin';

export async function initialize(container, connOptions = {}, renderOptions = {}) {
    const editor = new NodeEditor('retejs@0.1.0', container);

    editor.use(ConnectionPlugin, connOptions);
    editor.use(VueRenderPlugin, renderOptions);

    const engine = new Engine('retejs@0.1.0');
    
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