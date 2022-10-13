import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

import NProgress from "nprogress/nprogress.js";

// Main layouts
import LayoutBackend from "@/layouts/variations/BackendStarter.vue";
import LayoutSimple from "@/layouts/variations/Simple.vue";

// Frontend: Landing
const Landing = () => import("@/views/starter/LandingView.vue");

// Backend: Dashboard
const Dashboard = () => import("@/views/starter/DashboardView.vue");
const AumOverView = () => import("@/views/backend/real-estate-report/aum/Overview.vue");
const AumUserCollection = () => import("@/views/backend/real-estate-report/aum/UserCollection.vue");
const AumDetail = () => import("@/views/backend/real-estate-report/aum/Detail.vue");
const Transaction = () => import("@/views/backend/real-estate-report/Transaction.vue");
const Moving = () => import("@/views/backend/real-estate-report/moving/Moving.vue");
const MovingDetail = () => import("@/views/backend/real-estate-report/moving/Detail.vue");

// Set all routes
const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: LayoutBackend,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
      },
    ],
  },
  {
    path: "/real-estate-report",
    redirect: "/real-estate-report/aum-overview",
    component: LayoutBackend,
    children: [
      {
        path: "aum-overview",
        name: "aum-overview",
        component: AumOverView,
      },
      {
        path: "aum-user-collection",
        name: "aum-user-collection",
        component: AumUserCollection,
      },
      {
        path: "aum-detail",
        name: "aum-detail",
        component: AumDetail,
        props: {
          default: true
        }
      },
      {
        path: "transaction",
        name: "transaction",
        component: Transaction,
      },
      {
        path: "moving",
        name: "moving",
        component: Moving,
      },
      {
        path: "moving-detail",
        name: "moving-detail",
        component: MovingDetail,
      },
    ],
  }
];

// Create Router
const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
  routes,
});

// NProgress
/*eslint-disable no-unused-vars*/
NProgress.configure({ showSpinner: false });

router.beforeResolve((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});
/*eslint-enable no-unused-vars*/

export default router;
