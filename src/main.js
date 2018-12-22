import Vue from 'vue';
import VueKonva from 'vue-konva';

import App from './App.vue';
import { store } from './store/store';

Vue.config.productionTip = false;

Vue.use(VueKonva);

new Vue({
  store,
  render: h => h(App),
}).$mount('#vuer');
