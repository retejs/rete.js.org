import { assignSection } from '@/services/i18n';
import main from './main';
import editor from './editor';
import engine from './engine';
import components from './components';
import nodes from './nodes';
import sockets from './sockets';
import controls from './controls';
import events from './events';
import plugins from './plugins';

export default () => assignSection([
  ...main,
  ...editor,
  ...engine,
  ...components,
  ...nodes,
  ...sockets,
  ...controls,
  ...events,
  ...plugins,
], 'docs');
