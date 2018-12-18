import T9N from 'vue-t9n';

export function getLocale() {
    if(localStorage.getItem('lang'))
        return localStorage.getItem('lang');
        
    if (navigator.userLanguage)
        return navigator.userLanguage.split('-')[0];

    if (navigator.language)
        return navigator.language.split('-')[0];
    
    return 'en';
}

export function assignSection(list, name) {
    return list.map(([origin, translation]) => ([origin, translation, name]))
}

export default T9N;
