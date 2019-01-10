import Vue from 'vue';
import VueKonva from 'vue-konva';
import VueNestable from 'vue-nestable';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/black-green-dark.css';
import "vue-material-design-icons/styles.css";

import App from './App.vue';
import store from './store/store';

Vue.config.productionTip = false;

Vue.use(VueKonva);
Vue.use(VueMaterial);
Vue.use(VueNestable);

new Vue({
  store,
  render: h => h(App),
}).$mount('#vuer');
