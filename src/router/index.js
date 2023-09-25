import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/", // [경로]
        name: "Main'", // [이름]
        component: () => import('../components/Main') // [로드 파일]
    },
    {
        path: "/Artists", // [경로]
        name: "Artists", // [이름]
        component: () => import('../components/Artists') // [로드 파일]
    },
    {
        path: "/Artworks", // [경로]
        name: "Artworks", // [이름]
        component: () => import('../components/Artworks') // [로드 파일]
    }
];

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export default router
