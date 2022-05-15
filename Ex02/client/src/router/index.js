import { createRouter, createWebHistory } from 'vue-router'
// import HomeLogin from '../views/HomeLogin.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('../views/HomeLogin.vue')
        },
        {
            path: '/register',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/HomeSignup.vue')
        },
        {
            path: '/Home',
            name: 'homeform',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../components/HomeForm.vue')
        },
        {
            path: '/products',
            name: 'products',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../components/ProductsForm.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../components/DashBoard.vue')
        }
    ]
})

export default router