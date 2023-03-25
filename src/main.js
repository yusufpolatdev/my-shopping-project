import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/main'
import {createPinia} from "pinia";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import jQuery from 'jquery'

const appView = createApp(App)
const pinia = createPinia()

window.jQuery = jQuery
window.$ = jQuery

appView.use(router)
appView.use(pinia)


appView.mount('#app')
