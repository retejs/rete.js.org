function install(Vue, { router }) {
    function findText(hash) {
        const text = hash.split('#tosearch=')[1];
            
        if(text) window.find(text)
    }
    function saveText() {
        router.push({ hash: '#tosearch='+window.getSelection().toString() })
    }
    router.afterEach((to) => {
        setTimeout(() => findText(to.hash), 500);
    })
    document.addEventListener('mouseup', saveText);
    document.addEventListener('touchup', saveText);

    Vue.prototype.$tosearch = (path, text) => {
        return `${path}#tosearch=${text}`;
    }
}

export default {
    install
}