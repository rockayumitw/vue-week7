import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: () => import('../views/Index/Home.vue'),
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/Index/Products.vue'),
      },
      {
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/Index/Product.vue'),
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Index/Cart.vue'),
      },
      {
        path: '/createOrder',
        name: 'createOrder',
        component: () => import('../views/Index/createOrder.vue'),
      },
      {
        path: '/order/:id',
        name: 'Order',
        component: () => import('../views/Index/Order.vue'),
      },
      {
        path: '/news',
        name: 'News',
        component: () => import('../views/Index/News.vue'),
      },
      {
        path: '/new/:id',
        name: 'New',
        component: () => import('../views/Index/New.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Dashboard/Login.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Dashboard/Products.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/Dashboard/Coupons.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/Dashboard/Orders.vue'),
      },
      {
        path: 'news',
        component: () => import('../views/Dashboard/News.vue'),
      },
    ],
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: () => import('../views/NotFound.vue'),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
