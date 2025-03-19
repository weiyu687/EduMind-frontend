import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(process.env.VUE_APP_BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: () =>
                import ('../views/MainPage.vue')
        },
        {
            path: '/design',
            name: 'design',
            component: () =>
                import ('../views/LearningDesign.vue')
        },
        {
            path: '/resource',
            name: 'resource',
            component: () =>
                import ('../views/ResourceGeneration.vue')
        }
    ]
})

export default router