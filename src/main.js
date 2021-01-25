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

const configOptions = {
  apiKey: "AIzaSyCx0NrZgwrtLjLT7ekFlKuLcIxD37xOY4I",
  authDomain: "apiko-36d01.firebaseapp.com",
  projectId: "apiko-36d01",
  storageBucket: "apiko-36d01.appspot.com",
  messagingSenderId: "929670080987",
  appId: "1:929670080987:web:71e0f84b2ef09976541ffe",
  measurementId: "G-YYYXH2R239"
};

firebase.initializeApp(configOptions);
const storage = firebase.storage();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
