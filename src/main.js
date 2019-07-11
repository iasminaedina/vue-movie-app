/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Toasted from 'vue-toasted';
import axios from 'axios';
import moment from 'moment';
import App from './App.vue';
import router from './router';
import store from './store';

window.eventHub = new Vue();

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter, axios);
Vue.use(Toasted);

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

Vue.filter('formatDate', (value) => {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY');
  }
});

Vue.toasted.register('myToast', message => message, {
  type: 'success',
  theme: 'bubble',
  position: 'bottom-right',
  duration: 3000,
  className: ['toastStyle'],
});

require('./assets/main.scss');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
