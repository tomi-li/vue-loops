import Vue from 'vue';
import App from './App.vue';
import router from './router';

// reset css
import '../node_modules/normalize.css/normalize.css';
// components
import VueLoops from '../src';

console.clear();

Vue.use(VueLoops);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
