import { shallowMount } from '@vue/test-utils';
import LeftContainer from '../../src/containers/CenterContainer.vue';

describe('LeftContainer', () => {
  it('renders the component', () => {
    // arrange
    const wrapper = shallowMount(LeftContainer)

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})