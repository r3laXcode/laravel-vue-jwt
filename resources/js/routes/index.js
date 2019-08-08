import VueRouter from 'vue-router'

import routesAdmin from './admin'


let routes = [
    {
        path: '/',
        component: require('../components/Layouts/Default/index.vue').default,
        children: [
            {
                path: '/',
                component: require('../components/Views/Auth/login.vue').default
            }
        ]
    },
    ...routesAdmin,
    {
        path: '*',
        component: require('../components/Layouts/Default/index.vue').default,
        children: [
            {
                path: '*',
                component: require('../components/Layouts/error-page.vue').default
            },
            {
                path: '/404',
                name: '404',
                component: require('../components/Layouts/error-page.vue').default
            },
            {
                name: 'access-denied',
                path: '/access-denied',
                component: require('../components/Layouts/access-denied.vue').default,
            }
        ]
    }

]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        // validar usuario 
        let userData = window.localStorage.getItem('user');
        let authUser = userData ? JSON.parse(userData) : null;
        if (!authUser) {
            next('/')
        } else {
            // console.log(authUser);
            // console.log(to.meta.roles);
            let valid = validateRol(authUser.rol, to.meta.roles);
            if (valid) {
                next()
            } else {
                next('/')
            }
        }
      

    } else {
        next()
    }
})

function validateRol(rol, array) {
    var result = array.indexOf(rol);
    if (result != -1) {
        return true;
    } else {
        return false;
    }

}

export default router;