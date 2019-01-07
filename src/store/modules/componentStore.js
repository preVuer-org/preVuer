import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const componentStore = new Vuex.Store({
  state: {
    newComponent: {
      id: null,
      title: null,
      parentId: null,
      parentTitle: 'none',
      childrenIds: [],
      x: null,
      y: null,
      height: 50,
      width: 50,
      stroke: 'black',
      strokeWidth: 3,
      strokeScaleEnabled: false,
      draggable: true,
      opacity: 0.5,
      fill: 'blue',
    }
  }
});

export default componentStore;
