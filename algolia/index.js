import { mount, createLocalVue } from '@vue/test-utils';
import loadTranslations from './src/consts/localization';
import VueT9N from 'vue-t9n';
import components from './components';
import { indices } from './client';

global.fetch = require('jest-fetch-mock')
global.fetch.mockResponse(JSON.stringify({ tags: { latest: '0.0.0' }}))

const localVue = createLocalVue()
localVue.use(VueT9N)

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

function extractCode(name, customBlocks) {
    const block = customBlocks.find(b => b.type === 'code' && b.attrs.name && b.attrs.name === name);

    if(block) return block.content.trim();
    return null;
}

async function extractText(wrapper, component) {
    return await new Promise((res) => {
        wrapper.vm.$nextTick(() => {
            const elements = wrapper.findAll('p,h1,h2,h3,h4,h5,h6,Code').wrappers;

            const text = elements.map(w => {
                const isCode = w.is('Code');
                const source = w.attributes('source');

                return (isCode && extractCode(source, component.customBlocks)) || w.text()
            });

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

                const texts = await extractText(wrapper, component);
                
                for(let text of texts) {
                    index.addObject({ text, path })
                }
            }
        }
    });
});
  