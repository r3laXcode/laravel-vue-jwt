import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import dataUsuario from './modulo/usuario/index';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
    key: 'vuex', // The key to store the state on in the storage provider.
    storage: window.localForage, // or window.sessionStorage or localForage
})


export default new Vuex.Store({
    modules: {
        dataUsuario: dataUsuario,
    },
    plugins: [vuexLocalStorage.plugin]
})