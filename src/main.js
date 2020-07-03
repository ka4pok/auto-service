import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import Vuelidate from 'vuelidate/src'

Vue.config.productionTip = false
Vue.use(Vuelidate)

firebase.initializeApp({
    apiKey: "AIzaSyC5QojJ42_P1AUPKu8AefMLBqRC2LVqXGI",
    authDomain: "auto-service-f30db.firebaseapp.com",
    databaseURL: "https://auto-service-f30db.firebaseio.com",
    projectId: "auto-service-f30db",
    storageBucket: "auto-service-f30db.appspot.com",
    messagingSenderId: "418276475093",
    appId: "1:418276475093:web:132113989060d63d2fe25c",
    measurementId: "G-5RHQHTVVDH"
})

let app

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})
