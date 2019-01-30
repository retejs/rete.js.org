import { assignSection } from '@/i18n';
import main from './main';
import editor from './editor';
import engine from './engine';
import components from './components';
import nodes from './nodes';
import sockets from './sockets';
import controls from './controls';
import developments from './developments';
import plugins from './plugins';

export default () => assignSection([
  ...main,
  ...editor,
  ...engine,
  ...components,
  ...nodes,
  ...sockets,
  ...controls,
  ...developments,
  ...plugins
], 'docs');