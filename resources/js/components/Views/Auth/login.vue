<template>
    <div class="container">
        <div class="row ">
            <div class="login-form">
                <form @submit.prevent="submit" >
                    <h2 class="text-center">MailApp</h2>       
                    <div class="form-group">
                        <input name="email"  type="text" class="form-control" placeholder="Email" v-validate="'required|email'" v-model="loginForm.email">
                        <span>{{ errors.first('email') }}</span>
                    </div>
                    <div class="form-group">
                        <input name="password"  type="password" class="form-control" placeholder="Contraseña" v-validate="'required'" v-model="loginForm.password">
                        <span>{{ errors.first('password') }}</span>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'LoginComponent',
        mounted() {
            console.log('Component Home mounted.')
        },
        data() {
            return {
                loginForm: {
                    email: 'gpfeffer@example.net',
                    password: 'secret'
                }
            }
        },
        methods : {
           async submit(e){
                let result = await this.$validator.validate();
                if (!result) {
                    return  toast.fire({
                        type: 'warning',
                        title: 'El email o Password es incorrecto'
                    })
                }
                let url = 'auth/login';

                try {
                    let response = await api.call('post', url, this.loginForm);
                    let user = response.data.user;
                    let token = response.data.access_token;
                    let setUser = auth.setLogin(token, user);
                    if(setUser){
                        this.$store.dispatch('dataUsuario/addUsuario',user);
                        this.$router.push('/adm-home');
                    }

                } catch(err) {
                    if(err.status == 401) {
                        return toast.fire({
                            type: 'warning',
                            title: 'El email o Password es incorrecto'
                        })
                    }
                }
        

                

                
                
              
           }
           
        }
    }
</script>
<style scoped>
	.login-form {
		width: 340px;
    	margin: 50px auto;
	}
    .login-form form {
    	margin-bottom: 15px;
        background: #f7f7f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
    .login-form h2 {
        margin: 0 0 15px;
    }
    .form-control, .btn {
        min-height: 38px;
        border-radius: 2px;
    }
    .btn {        
        font-size: 15px;
        font-weight: bold;
    }
</style>