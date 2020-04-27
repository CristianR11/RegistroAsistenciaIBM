import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import '@babel/polyfill'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAqv7HkMc9KSLNeHqKJ9tfuxWrwR9UNxJ0",
  authDomain: "registro-de-asistentes-app.firebaseapp.com",
  databaseURL: "https://registro-de-asistentes-app.firebaseio.com",
  projectId: "registro-de-asistentes-app",
  storageBucket: "registro-de-asistentes-app.appspot.com",
  messagingSenderId: "641129131819",
  appId: "1:641129131819:web:31f35f236c8b6ee4435f6e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user){

  new Vue({
    el: '#app',
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')

})

