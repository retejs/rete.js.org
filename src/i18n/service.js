import Vue from 'vue';

export default class LangService extends Vue {

    constructor() {
        super();
        this.lang = this.getLocale();
    }

    getLocale() {
        if(localStorage.getItem('lang'))
            return localStorage.getItem('lang');
            
        if (navigator.userLanguage)
            return navigator.userLanguage.split('-')[0];

        if (navigator.language)
            return navigator.language.split('-')[0];
        
        return 'en';
    }

    setLocale(value) {
        localStorage.setItem('lang', value);
        this.lang = value;
        this.$emit('setLocale', value)
    }
}