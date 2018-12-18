import { assignSection } from '@/i18n';
import main from './main';

export default () => assignSection([
  ...main
], 'docs');