import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

// 注册路由插件
Vue.use(VueRouter)

// 路由规则
const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import('../views/Blog.vue')
    },
    {
        path: '/photo',
        name: 'Photo',
        component: () => import('../views/Photo.vue')
    },
    {
        path: '*',
        name: '404',
        component: () => import('../views/404.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router