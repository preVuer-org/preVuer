import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import componentStore from './modules/componentStore';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentText: '',
    nextId: 1,
    totalComponents: 0,
    components: [],
    focusComponent: {},
    imagePath: '',
  },
  getters,
  mutations,
  actions,
  modules: {
    component: componentStore,
  },
});
