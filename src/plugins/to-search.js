import { parse, stringify } from 'query-string';

function install(Vue, { router, langService }) {
    function saveText() {
        router.push({ hash: stringify({
            tosearch: window.getSelection().toString(),
            lang: langService.lang
        })})
    }
    router.afterEach((to) => {
        const { lang, tosearch } = parse(to.hash);

        if(lang)
            langService.setLocale(lang);
        if(tosearch)
            setTimeout(() => window.find(tosearch), 500);
    })
    document.addEventListener('mouseup', saveText);
    document.addEventListener('touchup', saveText);

    Vue.prototype.$tosearch = (path, text) => {
        return `${path}#${stringify({ tosearch: text, lang: langService.lang })}`;
    }
}

export default {
    install
}