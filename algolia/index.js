import { mount, createLocalVue } from '@vue/test-utils';
import loadTranslations from './src/consts/localization';
import VueT9N from 'vue-t9n';
import algoliasearch from 'algoliasearch';
import components from './components';

global.fetch = require('jest-fetch-mock')
global.fetch.mockResponse(JSON.stringify({ tags: { latest: '0.0.0' }}))

const client = algoliasearch(
    '0S8ITD2OZ2',
    process.env.API_KEY
);

const localVue = createLocalVue()
localVue.use(VueT9N)

const indices = ['ru', 'en', 'ua'].map(lang => ({ lang, index: client.initIndex(lang)}));

function createWrapper(component) {
    const wrapper = mount(component, { 
        localVue,
        stubs: {
            Tooltip: true
        }
    });
    wrapper.vm.$setTranslations(loadTranslations())

    return wrapper;
}

async function extractText(wrapper) {
    return await new Promise((res) => {
        wrapper.vm.$nextTick(() => {
            const elements = wrapper.findAll('p,h1,h2,h3,h4,h5,h6').wrappers;
            const text = elements.map(w => w.text());

            res(text);
        });
    });
}


describe('algolia', () => {
    it('', async () => {
        for(let { index } of indices) {
            await index.clearIndex()
        }

        for(let { component, path } of components) {
            const wrapper = createWrapper(component);

            for(let { index, lang } of indices) {
                wrapper.vm.$setLocale(lang);

                index.addObject({ text: await extractText(wrapper), path })
            }
        }
    });
});
  