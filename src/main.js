import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import AsyncComputed from 'vue-async-computed'
// vue toast
import vueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(vueToast);
import ja from 'vuetify/es5/locale/ja.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
initializeApp(firebaseConfig);

Vue.config.productionTip = false


new Vue({
  vuetify,
  store,
  AsyncComputed,router,
  lang: {
    locales: { ja },
    current: 'ja',
  },
  render: h => h(App)
}).$mount('#app')
