export const routes = [
    {
        publicPath: './',
        name: 'product.index',
        component: () => import('./components/product/Index.vue')
    },
    // {
    //     path: '/product/:id',
    //     name: 'product.show',
    //     component: () => import('./components/product/Show.vue')
    // },
    // {
    //     path: '/order/summary',
    //     name: 'order.summary',
    //     component: () => import('./components/order/Summary.vue')
    // },
    // {
    //     path: '/order/checkout',
    //     name: 'order.checkout',
    //     component: () => import('./components/order/Checkout.vue')
    // }
]