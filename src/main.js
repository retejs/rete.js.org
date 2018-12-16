import Vue from 'vue';
import Vuex from 'vuex';
import iView from 'iview';
import VueMarkdown from 'vue-markdown';
import { getLocale } from './i18n'
import 'iview/dist/styles/iview.css';
import './assets/styles/common.sass';
import langs from './consts/localization';

import I18n from './i18n';
import VueRouter, { router } from './router';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(iView);
Vue.use(VueRouter);
Vue.use(I18n, new Vuex.Store());
Vue.use(VueMarkdown);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  created(){
    this.$setTranslations(langs)
    this.$setLocale(getLocale())
  }
})
