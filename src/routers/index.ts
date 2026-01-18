import { createRouter, createWebHistory } from "vue-router";
import PublicLayout from "../layouts/PublicLayout.vue";

// Import Service
import NotFound from "../services/NotFound.vue";

// Import komponen view Public
import LandingView from "../views/public/LandingView.vue";
import EduDashboardView from "../views/public/EduDashboardView.vue";
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
import UpacaraView from "../views/public/tentang papua/UpacaraView.vue";
import SenjataView from "../views/public/tentang papua/SenjataView.vue";

// Module Belajar

// File test
import test from "../components/public/culture/ceritaRakyat/test.vue";
const routes = [
  {
    path: "/",
    component: PublicLayout,
    children: [
      {
        path: "",
        name: "Landing",
        component: LandingView,
        meta: {
          title: "Beranda | Pustaka Papua",
        },
      },
      {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFound,
        meta: {
          title: "404 - Tidak Ditemukan",
        },
      },
      {
        path: "/belajar",
        name: "EduDashboard",
        component: EduDashboardView,
        meta: {
          title: "Belajar | Pustaka Papua",
        },
      },
      {
        path: "/budaya",
        name: "CultureList",
        component: CultureListView,
        meta: {
          title: "Budaya | Pustaka Papua",
        },
      },
      {
        path: "/budaya/:id",
        name: "CultureDetail",
        component: CultureDetailView,
        props: true,
      },
      {
        path: "/umkm",
        name: "UmkmCatalog",
        component: UmkmCatalogView,
        meta: {
          title: "UMKM | Pustaka Papua",
        },
      },
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
          import("../components/public/culture/ceritaRakyat/LegendaCaboPui.vue"),
        meta: {
          title: "Cerita Rakyat | legenda-cobo-pui",
        },
        props: true,
      },
      {
        path: "/cart",
        name: "Cart",
        component: CartView,
        meta: {
          title: "Cart | Pustaka Papua",
        },
      },
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
      {
        path: "/upacara",
        name: "upacara",
        component: UpacaraView,
        props: true,
        meta: {
          title: "Tentang Papua | Upacara Adat",
        },
      },
      {
        path: "/senjataTradisional",
        name: "senjataTradisional",
        component: SenjataView,
        props: true,
        meta: {
          title: "Tentang Papua | Senjata Tradisional",
        },
      },
      { path: "/test", name: "test", component: test },

      // Module Belajar
      {
        path: "belajar/HtmlDasar",
        name: "HtmlDasar",
        component: () =>
          import("../components/public/edu/contents/HtmlDasarContent.vue"),
        meta: {
          title: "Belajar | HTML Dasar",
        },
        props: true,
      },
      {
        path: "belajar/english-guide-basic",
        name: "english-guide-basic",
        component: () =>
          import("../components/public/edu/contents/EnglishGuideBasic.vue"),
        meta: {
          title: "Belajar | Bahasa Inggris Dasar",
        },
        props: true,
      },
      {
        path: "belajar/kopi-wamena-modern",
        name: "kopi-wamena-modern",
        component: () =>
          import("../components/public/edu/contents/KopiWamenaBasicLearnView.vue"),
        meta: {
          title: "Belajar | kopi Wamena Modern",
        },
        props: true,
      },
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
