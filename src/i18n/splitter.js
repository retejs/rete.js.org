import Vue from 'vue';

Vue.filter('stranslate', text => { // translate sentences
    if(!Vue.prototype.$t) throw 'Module vuex-i18n required';
    
    return text
        .split(/\. +/g)
        .map(t => Vue.prototype.$t(t))
        .join('. ')
}); 