import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/example',
    name: 'example',
    // route level code-splitting
    // this generates a separate chunk (example.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "example" */ '../views/ExampleView.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
  },
  {
    path: '/new-order',
    name: 'newOrder',
    // route level code-splitting
    // this generates a separate chunk (newOrder.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/TakeOrder.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
