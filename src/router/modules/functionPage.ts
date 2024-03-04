
/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const functionPageRouter = [{
    path: '/function-page',
    component: Layout,
    redirect: '/function-page/404',
    name: 'function-page',
    meta: {
        title: '功能页面',
        icon: 'ElementPlus'
    },
    children: [
        {
            path: 'tools',
            component: () => import('@/views/functionPage/tools/index.vue'),
            name: 'tools',
            meta: { title: '工具链集合', keepAlive: true , icon: 'MenuIcon'}
        },
        {
            path: '404',
            component: () => import('@/views/error/404.vue'),
            name: 'function-404',
            meta: { title: '404', keepAlive: true , icon: 'MenuIcon'}
        },
        {
            path: '403',
            component: () => import('@/views/error/403.vue'),
            name: 'function-403',
            meta: { title: '403', keepAlive: true , icon: 'MenuIcon'}
        },
    ]
}]

export default functionPageRouter
