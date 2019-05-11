import Vue from 'vue';
import iView from 'iview';
import InstantSearch from 'vue-instantsearch';
import { LangService } from './i18n'
import 'iview/dist/styles/iview.css';
import './assets/styles/common.sass';

import I18n from './i18n';
import VueRouter, { router } from './router';
import ToSearch from './plugins/to-search'
import App from './App.vue';
import './pwa';

Vue.config.productionTip = false

Vue.use(iView);
Vue.use(VueRouter);
Vue.use(I18n);
Vue.use(InstantSearch);
Vue.use(ToSearch, { router });

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  provide() {
    return {
      langService: Vue.observable(new LangService())
    }
  }
})
