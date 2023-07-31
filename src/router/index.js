import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/", // [경로]
        name: "First", // [이름]
        component: () => import('../components/First') // [로드 파일]
    },
    {
        path: "/Second", // [경로]
        name: "Second", // [이름]
        component: () => import('../components/Second') // [로드 파일]
    },
    {
        path: "/Third", // [경로]
        name: "Third", // [이름]
        component: () => import('../components/Third') // [로드 파일]
    }
];

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export default router
