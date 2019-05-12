import Vue from 'vue';
import iView from 'iview';
import InstantSearch from 'vue-instantsearch';
import * as Sentry from '@sentry/browser';
import * as SentryIntegrations from '@sentry/integrations';
import LangService from './i18n/service'
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


if(process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://41d8b37116ff4a9dbf1d0acdd4d4c3ba@sentry.io/1457700',
    integrations: [new SentryIntegrations.Vue()]
  });
}

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
