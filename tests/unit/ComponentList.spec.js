import Vuex from 'vuex';

import { shallowMount, createLocalVue } from '@vue/test-utils'
import ComponentList from '@/components/LeftContainer/ComponentList'

const localVue = createLocalVue();
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userName: 'alice'
  }
})


describe('ComponentList', () => {
  test('is a vue instance', () => {
    const wrapper = shallowMount(ComponentList, 
      store,
      localVue
    )
    expect(wrapper.find(".userName").text()).toBe("alice")
  })
})