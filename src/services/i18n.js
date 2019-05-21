import Vue from 'vue'; // use event emitter

export default class LangService extends Vue {

    constructor() {
        super();
        this.lang = 'ru';
        this.langs = ['ru'];
    }

    getLocale() {
        if(localStorage.getItem('lang'))
            return localStorage.getItem('lang');
            
        if (navigator.userLanguage || navigator.language)
            return (navigator.userLanguage || navigator.language).split('-')[0];
        
        return 'en';
    }

    setLocale(value) {
        if(!this.langs.includes(value)) {
            // eslint-disable-next-line no-console
            console.info(`Translation for language ${value} not found`);
            return;
        }

        localStorage.setItem('lang', value);
        this.lang = value;
        this.$emit('setLocale', value)
    }

    setLangs(list) {
        this.langs = list;
    }
}

export function assignSection(list, name) {
    return list.map(([origin, translation]) => ([origin, translation, name]))
}