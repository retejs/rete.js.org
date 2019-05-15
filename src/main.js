import Vue from 'vue';
import iView from 'iview';
import InstantSearch from 'vue-instantsearch';
import LangService from './i18n/service'
import 'iview/dist/styles/iview.css';
import './assets/styles/common.sass';

import VueRouter, { router } from './router';
import ToSearch from './plugins/to-search'
import App from './App.vue';
import './pwa';
import './bug-handler';

Vue.config.productionTip = false

const langService = Vue.observable(new LangService(router))

Vue.use(iView);
Vue.use(VueRouter);
Vue.use(InstantSearch);
Vue.use(ToSearch, { router, langService });

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  provide() {
    return {
      langService
    }
  }
})
