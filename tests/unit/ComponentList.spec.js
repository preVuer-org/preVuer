import { shallowMount } from '@vue/test-utils'
import ComponentList from '@/components/LeftContainer/ComponentList'

describe('ComponentList', () => {
  test('is a vue instance', () => {
    const wrapper = shallowMount(ComponentList, {
      mocks: {
        $store: {
          state: { title: 'MainComponent' }
        }
      }
    })
    expect(wrapper.find("id").text()).toBe("MainComponent")
  })
})