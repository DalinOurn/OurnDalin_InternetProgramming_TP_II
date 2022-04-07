import { createRouter, createWebHistory } from 'vue-router'
// import HomeLogin from '../views/HomeLogin.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'login',
            component: () =>
                import ('../views/logIn.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () =>
                import ('../views/signUp.vue')
        },
        {
            path: '/home',
            name: 'homeform',
            component: () =>
                import ('../views/Home.vue')
        },
         {
            path: '/logout',
            name: 'logout',
            component: () =>
                import ('../views/logIn.vue')
        },
    ]
})

export default router