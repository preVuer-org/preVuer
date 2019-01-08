import { mount } from '@vue/test-utils';
import ComponentList from '@/components/LeftContainer/ComponentList.vue';
import getters from '../../src/store/getters';

describe('ComponentList', () => {
  it('renders a component list tag using a mock store', () => {
    const wrapper = mount(ComponentList, {
      mocks: {
        $store: {
          state: {
            components: [
              { title: 'title1' },
              { title: 'title2' },
            ],
          },
          getters,
        }
      }
    });
    expect(wrapper.find('#component-list').html().includes('<div id="component-list"></div>'));
  });
});
