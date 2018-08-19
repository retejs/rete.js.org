import Vue from 'vue';
import vuexI18n from 'vuex-i18n';
import langs from '../consts/localization';
import './splitter';

export function setTranslations(lang) {
    Vue.i18n.set(lang);
    
    if(langs[lang]) 
        Vue.i18n.replace(lang, langs[lang]); 
}

export function detect() {
    if(localStorage.getItem('lang'))
        return localStorage.getItem('lang');
        
    if (navigator.userLanguage)
        return navigator.userLanguage;

    if (navigator.language)
        return navigator.language;
    
    return 'en';
}

export default vuexI18n.plugin;