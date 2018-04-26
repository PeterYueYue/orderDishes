import Vue from 'vue'
import App from './App'
import router from './index'
import axios from 'axios';
import Vuex from 'vuex'
import store from './vuex';

Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
