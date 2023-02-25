/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createApp } from 'vue';
import ViewUIPlus from 'view-ui-plus';
// @ts-ignore
import InstantSearch from 'vue-instantsearch/vue3/es';
import 'instantsearch.css/themes/satellite-min.css';
import LangService from './services/i18n';
import SearchService from './services/to-search';
import SupportService from './services/support';
import 'view-ui-plus/dist/styles/viewuiplus.css';
import './assets/styles/common.sass';

import router from './router';
import App from './App.vue';
import './pwa';
import './bug-handler';

export const app = createApp(App);

app.use(ViewUIPlus);
app.use(InstantSearch);

const langService = new LangService();
const searchService = new SearchService(router, langService);
const supportService = new SupportService(router, ['/docs']);// , this.$Notice, this.$t)

app.provide('langService', langService);
app.provide('searchService', searchService);
app.provide('supportService', supportService);

app.use(router);

app.mount('#app');

// new Vue({
//   el: '#app',
//   router,
//   render: (h) => h(App),
//   provide() {
//     const langService = Vue.observable(new LangService(router));
//     const searchService = Vue.observable(new SearchService(router, langService));
//     const supportService = Vue.observable(new SupportService(router, ['/docs'], this.$Notice, this.$t));

//     return {
//       langService,
//       searchService,
//       supportService,
//     };
//   },
//   created() {
//     this.$Notice.config({
//       top: 80,
//     });
//   },
// });
