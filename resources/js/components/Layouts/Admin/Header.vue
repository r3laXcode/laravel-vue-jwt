<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <div class="container">
        <b-navbar-brand href="#">Generador de Email</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
              <router-link to="/" class="nav-link">Configuración</router-link> 
              <router-link to="/about" class="nav-link">Audiencia</router-link>
              <router-link to="/about" class="nav-link">Plantilla</router-link>
          </b-navbar-nav>

        </b-collapse>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template slot="button-content"><em>{{currentUser.name}}</em></template>
                <b-dropdown-item href="#">Perfil</b-dropdown-item>
                <b-dropdown-item href="#" @click="logout">Cerrar sesión</b-dropdown-item>
            </b-nav-item-dropdown>

        </b-navbar-nav>
        </div>

      </b-navbar>
</template>

<script>
    export default {
        name: 'app-header',
        methods: {
            logout() {
                let response = auth.logout();
                if(response){
                    this.$router.push('/');
                }
                // this.$store.commit('logout');
                // this.$router.push('/login');
            }
        },
        computed: {
            currentUser() {
                return this.$store.getters['dataUsuario/getUsuario']
            }
        }
    }
</script>