import { shallowMount, createLocalVue } from '@vue/test-utils';
import algoliasearch from 'algoliasearch';
import c from '../src/components/Docs/Engine/index';

// const client = algoliasearch(
//     '0S8ITD2OZ2',
//     '0e372b36fbb8e1c0116c75a3531e36b4'
//   );

// const localVue = createLocalVue()
// localVue.directive('t9n', { })

describe('algolia', () => {
    it('', async () => {
        const wrapper = shallowMount(c);
        console.log(wrapper);

        // const index = client.initIndex('common');

        // await index.clearIndex();
        // console.log(wrapper.findAll('p'))

        // index.addObject({ text: wrapper.text() })
    });
});
  