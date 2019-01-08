import Vuex from 'vuex';
import VueMaterial from 'vue-material';
import { mount, createLocalVue } from '@vue/test-utils';
import LeftContainer from '@/containers/LeftContainer.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueMaterial);

// const mutations = {
//   addComponent: jest.fn(),
//   drawBox: jest.fn()
// }

const store = new Vuex.Store({
  // mutations,
  getters: {
    getCurrentText: () => 'CurrentText from localVuexStoreGetters'
  }
});

describe('LeftContainer', () => {
  const wrapper = mount(LeftContainer, {
    store,
    localVue
  });
  // console.log(wrapper.html());
  it('renders md-input with the correct text using localVuexStore', () => {
    expect(wrapper.find('#component-input').html().includes('<md-input value="Currenttext from localVuexStoreGetters"></md-input>'));
  });

  // it('commits 2 mutations when a button \'addComponent\' is clicked', () => {
  //   // wrapper.find('#addComponent').trigger("click")
  //   // console.log(wrapper.find('#addComponent'));
  //   // expect(mutations.addComponent).toHaveBeenCalled()
  // })
});
