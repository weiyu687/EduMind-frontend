import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(process.env.VUE_APP_BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: () =>
                import ('../views/Main.vue')
        }
    ]
})

export default router