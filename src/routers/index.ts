import { createRouter, createWebHistory } from "vue-router";
import PublicLayout from "../layouts/PublicLayout.vue";

// Import komponen view Public
import LandingView from "../views/public/LandingView.vue";
import EduDashboardView from "../views/public/EduDashboardView.vue";
import EduModuleDetailView from "../views/public/EduModuleDetailView.vue";
import CultureListView from "../views/public/CultureListView.vue";
import CultureDetailView from "../views/public/CultureDetailView.vue";
import UmkmCatalogView from "../views/public/UmkmCatalogView.vue";
import UmkmProductDetailView from "../views/public/UmkmProductDetailView.vue";
import CartView from "../views/public/CartView.vue";

const routes = [
  {
    path: "/",
    component: PublicLayout,
    children: [
      { path: "", name: "Landing", component: LandingView },
      { path: "/belajar", name: "EduDashboard", component: EduDashboardView },
      {
        path: "/belajar/:id",
        name: "EduModuleDetail",
        component: EduModuleDetailView,
        props: true,
      },
      { path: "/budaya", name: "CultureList", component: CultureListView },
      {
        path: "/budaya/:id",
        name: "CultureDetail",
        component: CultureDetailView,
        props: true,
      },
      { path: "/umkm", name: "UmkmCatalog", component: UmkmCatalogView },
      {
        path: "/umkm/:id",
        name: "UmkmProductDetail",
        component: UmkmProductDetailView,
        props: true,
      },
      { path: "/cart", name: "Cart", component: CartView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, _from, next) => {
  document.title =
    (to.meta.title as string) || "PintarPustaka - Portal Edukasi dan Budaya";
  next();
});

export default router;
