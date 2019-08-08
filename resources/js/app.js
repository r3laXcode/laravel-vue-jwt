require('./bootstrap');
import Vue from 'vue';
import axios from 'axios'
import store from './store'
import Api from './services/api.js';
import Auth from './services/auth.js';
import moment from 'moment';
import swal from 'sweetalert2'
import VueRouter from 'vue-router'
import router from './routes'
import { APIENDPOINT } from './app.config.js'
import VeeValidate, { Validator } from 'vee-validate';
import VeeValidateEs from 'vee-validate/dist/locale/es';
import BootstrapVue from 'bootstrap-vue'

window.eventBus = new Vue()
window.api = new Api();
window.auth = new Auth();
window.swal = swal;

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

window.toast = toast;

axios.defaults.baseURL = APIENDPOINT;

Vue.use(VueRouter)
Validator.localize('es', VeeValidateEs);
Vue.use(VeeValidate, {
    locale: 'es',
    classes: true,
    classNames: {
        valid: 'is-valid',
        invalid: 'is-invalid'
    }
});
Vue.use(BootstrapVue)

const app = new Vue({
    el: '#app',
    router,
    store
});