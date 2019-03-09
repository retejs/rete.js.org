import Vue from 'vue';
import iView from 'iview';
import VueMarkdown from 'vue-markdown';
import { getLocale } from './i18n'
import 'iview/dist/styles/iview.css';
import './assets/styles/common.sass';
import loadTranslations from './consts/localization';

import I18n from './i18n';
import VueRouter, { router } from './router';
import App from './App.vue';
import './shared';
import './pwa';

Vue.config.productionTip = false

Vue.use(iView);
Vue.use(VueRouter);
Vue.use(I18n);
Vue.use(VueMarkdown);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  created(){
    this.$setTranslations(loadTranslations())
    this.$setLocale(getLocale())
  }
})
