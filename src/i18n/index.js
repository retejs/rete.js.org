import Vue from 'vue';
import vuexI18n from 'vuex-i18n';

import en from './en.json';
import ru from './ru.json';

export function setTranslations(lang) {
    Vue.i18n.add('en', en);
    Vue.i18n.add('ru', ru);

    Vue.i18n.set(lang);
}

export default vuexI18n.plugin;