export default { // methods
    //Usuario
    addUsuario(context, data) {
        context.commit('ADD_USUARIO', data);
    }
}