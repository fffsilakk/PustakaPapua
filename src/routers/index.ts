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

// Tentang Papua
import CeritaRakyat from "../views/public/tentang papua/CeritaRakyat.vue";
import TarianAdatView from "../views/public/tentang papua/TarianAdatView.vue";
import AlatMusikView from "../views/public/tentang papua/AlatMusikView.vue";
import RumahAdatView from "../views/public/tentang papua/RumahAdatView.vue";
import WisataView from "../views/public/tentang papua/WisataView.vue";

// File test
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
        path: "/ceritaRakyat/biwar-sang-penakluk-naga",
        name: "biwar-sang-penakluk-naga",
        component: () =>
          import("../components/public/culture/ceritaRakyat/PenaklukNaga.vue"),
        meta: {
          title: "Cerita Rakyat | biwar-sang-penakluk-naga",
        },
        props: true,
      },
      {
        path: "/ceritaRakyat/empat-raja",
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
      {
        path: "/ceritaRakyat",
        name: "ceritaRakyat",
        component: CeritaRakyat,
        props: true,
        meta: {
          title: "Tentang Papua | Cerita Rakyat",
        },
      },
      {
        path: "/tarianAdat",
        name: "tarianAdat",
        component: TarianAdatView,
        props: true,
        meta: {
          title: "Tentang Papua | Tarian Adat",
        },
      },
      {
        path: "/alatMusik",
        name: "alatMusik",
        component: AlatMusikView,
        props: true,
        meta: {
          title: "Tentang Papua | Alat Musik",
        },
      },
      {
        path: "/rumahAdat",
        name: "rumahAdat",
        component: RumahAdatView,
        props: true,
        meta: {
          title: "Tentang Papua | Rumah Adat",
        },
      },
      {
        path: "/wisata",
        name: "wisata",
        component: WisataView,
        props: true,
        meta: {
          title: "Tentang Papua | Wisata",
        },
      },
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
