import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import plugin from './plugin'
import firebase from "firebase";
import VeeValidate from 'vee-validate';
import PortalVue from 'portal-vue';

Vue.use(PortalVue);
Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    valid: "is-valid",
    invalid: "is-invalid"
  }
});

Vue.config.productionTip = false

// Add general styles
import "../src/assets/styles/main.scss";



firebase.initializeApp(configOptions);

const storage = firebase.storage();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
