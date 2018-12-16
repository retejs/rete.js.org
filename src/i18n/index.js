import T9N from 'vue-t9n';
import langs from '../consts/localization';

export const Languages = [
    'ru',
    ...Object.keys(langs[0][1])
]

export function getLocale() {
    if(localStorage.getItem('lang'))
        return localStorage.getItem('lang');
        
    if (navigator.userLanguage)
        return navigator.userLanguage.split('-')[0];

    if (navigator.language)
        return navigator.language.split('-')[0];
    
    return 'en';
}

export default T9N;
