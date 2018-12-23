import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const componentStore = new Vuex.Store({
  state: {
    newComponent: {
      id: null,
      title: null,
      parentId: null,
      childrenIds: [],
      x: 110,
      y: 120,
      height: 50,
      width: 50,
      stroke: 'black',
      strokeWidth: 4,
      draggable: true,
      opacity: 0.5
    }
  }
});

export default componentStore;
