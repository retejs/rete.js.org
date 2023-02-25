import { mount, createLocalVue } from '@vue/test-utils';
import VueT9N from 'vue-t9n';
import loadTranslations from './src/consts/localization';
import components from './components';
import { indices } from './client';

global.fetch = require('jest-fetch-mock');

global.fetch.mockResponse(JSON.stringify({ tags: { latest: '0.0.0' } }));

const localVue = createLocalVue();
localVue.use(VueT9N);

function createWrapper(component, props) {
  const wrapper = mount(component, {
    localVue,
    stubs: {
      Tooltip: true,
      'router-link': true,
      CellGroup: true,
      Card: true,
    },
    propsData: props || {},
  });
  wrapper.vm.$setTranslations(loadTranslations());

  return wrapper;
}

function extractCode(name, customBlocks) {
  const block = customBlocks.find((b) => b.type === 'code' && b.attrs.name && b.attrs.name === name);

  if (block) return block.content.trim();
  return null;
}

async function extractText(wrapper, component) {
  return new Promise((res) => {
    wrapper.vm.$nextTick(() => {
      const elements = wrapper.findAll('p,h1,h2,h3,h4,h5,h6,Code').wrappers;

      const text = elements.map((w) => {
        const isCode = w.is('Code');
        const source = w.attributes('source');

        return (isCode && extractCode(source, component.customBlocks)) || w.text();
      });

      res(text);
    });
  });
}

describe('algolia', () => {
  it('', async () => {
    for (const { index } of indices) {
      await index.clearIndex();
    }

    for (const { component, path, props } of components) {
      const wrapper = createWrapper(component, props);

      for (const { index, lang } of indices) {
        wrapper.vm.$setLocale(lang);

        const texts = await extractText(wrapper, component);

        for (const text of texts) {
          index.addObject({ text, path });
        }
      }
    }
  });
});
