import Vue from 'vue';
import iView from 'iview';
import InstantSearch from 'vue-instantsearch';
import LangService from './services/i18n'
import 'iview/dist/styles/iview.css';
import './assets/styles/common.sass';

import VueRouter, { router } from './router';
import SearchService from './services/to-search'
import App from './App.vue';
import './pwa';
import './bug-handler';

Vue.config.productionTip = false

Vue.use(iView);
Vue.use(VueRouter);
Vue.use(InstantSearch);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  provide() {
    const langService = Vue.observable(new LangService(router));
    const searchService = Vue.observable(new SearchService(router, langService));

    return {
      langService,
      searchService
    }
  }
})
