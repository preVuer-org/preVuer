import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // totalComponents: 0
    nextId: 1,
    imagePath: '',
    successOpen: false,
    errorOpen: false,
    focusComponent: {},
    components: [],
    appDir: '',
    loading: false
  },
  getters: {
    // define getters here, call getters in components this.$store.getters.getterName
  },
  mutations: {

  },
  actions: {

  }
})


/*
    // component state
    component: [
      {
        name: String,
        box: {
          x: 400,
          y: 400,
          width: 300,
          height: 200, 
          stroke: 'black',
          strokeWidth: 4,
          draggable: true,
          opacity: 0.5
        }
      }
    ]
  }



*/