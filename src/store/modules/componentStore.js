import Vue from 'vue';
import Vuex from 'vuex';
import getColor from '../../utils/colors.util';

Vue.use(Vuex);

const componentStore = new Vuex.Store({
  state: {
    newComponent: {
      id: null,
      title: null,
      parentId: null,
      childrenIds: [],
      x: 100,
      y: 100,
      height: 50,
      width: 50,
      stroke: '#C6FF00',
      strokeWidth: 3,
      strokeScaleEnabled: false,
      draggable: true,
      opacity: 0.6
    }
  }
});

export default componentStore;
