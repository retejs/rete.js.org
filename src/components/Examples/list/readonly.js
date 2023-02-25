import ReadonlyPlugin from 'rete-readonly-plugin';
import { NumComponent } from '@/rete/components/num-component';
import { AddComponent } from '@/rete/components/add-component';
import { initialize as init } from '@/rete';
import data from '@/rete/data/simple.json';

export default async function (container) {
  const {
    editor, engine, resize, process,
  } = await init(container);

  editor.use(ReadonlyPlugin, { enabled: true });

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
