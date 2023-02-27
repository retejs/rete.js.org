import ViewUIPlus from 'view-ui-plus';
import VueInstantSearch from 'vue-instantsearch/vue3/es';
import { VueWindowSizePlugin } from 'vue-window-size/plugin';

// eslint-disable-next-line no-undef
export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;

  app.use(ViewUIPlus);
  app.use(VueInstantSearch);
  app.use(VueWindowSizePlugin);
});
