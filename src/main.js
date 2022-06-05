import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';
import store from './store/store';
import VeeValidate from 'vee-validate';

import '@/assets/sass/main.scss';
import 'bootstrap/scss/bootstrap.scss';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add([faUserCircle, faSignOutAlt])

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VeeValidate, { fieldsBagName: 'veeFields', locale: 'ptBr' });

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active'
});

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
