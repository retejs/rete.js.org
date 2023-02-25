import AreaPlugin from 'rete-area-plugin';
import { NumComponent } from '@/rete/components/num-component';
import { AddComponent } from '@/rete/components/add-component';
import data from '@/rete/data/simple.json';
import { initialize as init } from '../../../rete';

export default async function (container) {
  const {
    editor, engine, resize, process,
  } = await init(container);

  editor.use(AreaPlugin, { scaleExtent: { min: 1, max: 1 }, translateExtent: { width: 500, height: 400 } });

  [
    new NumComponent(),
    new AddComponent(),
  ].forEach((c) => {
    editor.register(c);
    engine.register(c);
  });

  await editor.fromJSON(data);

  resize();
  process();

  return { editor, engine };
}
