import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import AsyncComputed from 'vue-async-computed'

import ja from 'vuetify/es5/locale/ja.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,connectFirestoreEmulator } from "firebase/firestore";


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
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
connectFirestoreEmulator(db, '', 6080);
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
