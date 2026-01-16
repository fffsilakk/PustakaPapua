import { createRouter, createWebHistory } from "vue-router";
import PublicLayout from "../layouts/PublicLayout.vue";

// Import komponen view Public
import LandingView from "../views/public/LandingView.vue";
import EduDashboardView from "../views/public/EduDashboardView.vue";
import EduModuleDetailView from "../views/public/EduModuleDetailView.vue";
import CultureListView from "../views/public/CultureListView.vue";
import CultureDetailView from "../views/public/CultureDetailView.vue";
import UmkmCatalogView from "../views/public/UmkmCatalogView.vue";
import CartView from "../views/public/CartView.vue";
import test from "../components/public/culture/ceritaRakyat/test.vue";

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
        path: "/budaya/biwar-sang-penakluk-naga",
        name: "biwar-sang-penakluk-naga",
        component: () =>
          import("../components/public/culture/ceritaRakyat/PenaklukNaga.vue"),
        meta: {
          title: "Cerita Rakyat | biwar-sang-penakluk-naga",
        },
        props: true,
      },
      {
        path: "/budaya/empat-raja",
        name: "empat-raja",
        component: () =>
          import("../components/public/culture/ceritaRakyat/EmpatRaja.vue"),
        meta: {
          title: "Cerita Rakyat | empat-raja",
        },
        props: true,
      },
      {
        path: "/budaya/legenda-cobo-pui",
        name: "legenda-cobo-pui",
        component: () =>
          import(
            "../components/public/culture/ceritaRakyat/LegendaCaboPui.vue"
          ),
        meta: {
          title: "Cerita Rakyat | legenda-cobo-pui",
        },
        props: true,
      },
      { path: "/cart", name: "Cart", component: CartView },
      { path: "/test", name: "test", component: test },
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
