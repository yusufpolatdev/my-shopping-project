import {createRouter, createWebHistory} from "vue-router";

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
},
    {
        path: '/:category/:id',
        name: 'ProductDetails',
        component: () => import('../views/ProductDetails.vue'),

    },
    {
        path: '/:category',
        name: 'Category',
        component: () => import('../views/CategoryPage.vue'),

    },
    {
        path: '/basket',
        name: 'Basket',
        component: () => import('../views/Basket.vue'),

    },
    {
        path: '/favorites',
        name: 'Favorites',
        component: () => import('../views/FavoritesView.vue'),

    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('../views/Search.vue'),

    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router