import Vue from 'vue';
import VueKonva from 'vue-konva';
import VueNestable from 'vue-nestable';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/black-green-dark.css';
import "vue-material-design-icons/styles.css";

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(blue, A200), // The primary color of your application
  accent: md-get-palette-color(red, A200), // The accent or secondary color
  theme: dark // This can be dark or light
));

@import "~vue-material/dist/components/MdField/theme";

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
