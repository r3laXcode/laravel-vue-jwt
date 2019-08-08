import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

// operaciones modulares
const dataUsuario = {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}

export default dataUsuario