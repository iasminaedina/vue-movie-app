/* eslint-disable consistent-return */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import axios from 'axios';
import moment from 'moment';
import App from './App.vue';
import router from './router';
import store from './store';

window.eventHub = new Vue();
Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter, axios);

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

Vue.filter('formatDate', (value) => {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY');
  }
});
require('./assets/main.scss');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
