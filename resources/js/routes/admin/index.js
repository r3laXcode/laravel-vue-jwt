export default [
    // Usuarios
    {
        path: '/adm-home',
        component: require('../../components/Layouts/Admin/index.vue').default,
        meta: { requiresAuth: true, roles: ['admin'] },
        children: [
            {
                path: '/adm-home',
                component: require('../../components/Views/Admin/index.vue').default,
                meta: { requiresAuth: true, roles: ['admin'] },
            }
        ]
    },
]