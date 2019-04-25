import T9N from 'vue-t9n';

export class LangService {

    constructor() {
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
    }
}

export function assignSection(list, name) {
    return list.map(([origin, translation]) => ([origin, translation, name]))
}

export default T9N;
