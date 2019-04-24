import { mount, createLocalVue } from '@vue/test-utils';
import algoliasearch from 'algoliasearch';
import components from './components';

global.fetch = require('jest-fetch-mock')
global.fetch.mockResponse(JSON.stringify({ tags: { latest: '0.0.0' }}))

const client = algoliasearch(
    '0S8ITD2OZ2',
    '0e372b36fbb8e1c0116c75a3531e36b4'
  );

const localVue = createLocalVue()
localVue.directive('t9n', { })

describe('algolia', () => {
    it('', async () => {
        const index = client.initIndex('common');
        await index.clearIndex();

        components.forEach(c => {
            const wrapper = mount(c, { 
                localVue,
                stubs: {
                    Tooltip: true
                }
            });

            index.addObject({ text: wrapper.text() })
        });
    });
});
  