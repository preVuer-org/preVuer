
import { shallowMount } from '@vue/test-utils'
import LeftContainer from '@/containers/LeftContainer'

describe('LeftContainer', () => {
  it('renders the Left Container', () => {
    // arrange
    const wrapper = shallowMount(LeftContainer)

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})