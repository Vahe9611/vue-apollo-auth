import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';
import store from './store';
import createProvider from './apollo-provider';
import 'buefy/dist/buefy.css';

import DefaultLayout from './layouts/Default.vue';
import ProfileLayout from './layouts/ProfileLayout.vue';

Vue.component('default-layout', DefaultLayout);
Vue.component('profile-layout', ProfileLayout);

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount('#app');
