import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Index,
    meta: {
      layout: "default-layout"
    }
  },
  {
    path: "/log-in",
    name: "Log in",
    meta: {
      layout: "default-layout"
    },
    component: () =>
        import(/* webpackChunkName: "auth" */ "../views/auth/login.vue")
  },
  {
    path: "/registration",
    name: "Registration",
    meta: {
      layout: "default-layout"
    },
    component: () =>
        import(/* webpackChunkName: "auth" */ "../views/auth/register.vue")
  },
  {
    path: "/create-card",
    name: "Create card",
    meta: {
      layout: "default-layout"
    },
    component: () =>
        import(/* webpackChunkName: "auth" */ "../views/create-card.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
