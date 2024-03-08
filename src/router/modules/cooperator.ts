
/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const cooperateRouter = [{
    path: '/cooperation',
    component: Layout,
    redirect: '/cooperation/page1',
    name: 'cooperation',
    alwaysShow:true,
    meta: {
        title: '超级合作方',
        icon: 'School'
    },
    children: [
        {
            path: 'page1',
            component: () => import('@/views/cooperate/FisrtMenu.vue'),
            name: 'page1',
            meta: { title: '第一个合作人', keepAlive: true , icon: 'MenuIcon'}
        },
        {
            path: 'page2',
            component: () => import('@/views/cooperate/SecondMenu.vue'),
            name: 'page2',
            meta: { title: '第二个合作人', keepAlive: true , icon: 'MenuIcon'}
        },
    ]
}]

export default cooperateRouter
