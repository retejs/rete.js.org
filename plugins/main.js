import ViewUIPlus from 'view-ui-plus';
import VueInstantSearch from 'vue-instantsearch/vue3/es';
import { VueWindowSizePlugin } from 'vue-window-size/plugin';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// eslint-disable-next-line no-undef
export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;

  library.add(faDiscord, faTwitter, faGithub);

  app.component('font-awesome-icon', FontAwesomeIcon);

  app.use(library);
  app.use(ViewUIPlus);
  app.use(VueInstantSearch);
  app.use(VueWindowSizePlugin);
});
