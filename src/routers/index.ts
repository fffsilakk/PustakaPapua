// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import PublicLayout from "../layouts/PublicLayout.vue";

// Import komponen view Public
import BerandaView from "../views/public/BerandaView.vue";
// import TentangView from "../views/public/TentangView.vue";
// import TutorialView from "../views/public/TutorialView.vue";

// Import komponen view Services
import NotFound from "../services/NotFound.vue";
const routes = [
  {
    path: "/",
    component: PublicLayout,
    children: [
      {
        path: "",
        name: "beranda",
        component: BerandaView,
        meta: {
          title: "ナレDev | Beranda",
        },
      },
      //   {
      //     path: "/Tutorial/mengenal-komponen-pc",
      //     name: "mengenal-komponen-pc",
      //     // Lazy loading: component hanya didownload saat user membuka halaman ini
      //     component: () => import("../components/perangkatKeras/komponenPC.vue"),
      //     meta: {
      //       title: "ナレDev | mengenal komponen pc",
      //     },
      //   },
      //   {
      //     path: "/Tutorial/install-debian-12",
      //     name: "install-debian-12",
      //     // Lazy loading: component hanya didownload saat user membuka halaman ini
      //     component: () =>
      //       import("../components/sistemOperasi/InstallDebian12.vue"),
      //     meta: {
      //       title: "ナレDev | install debian 12",
      //     },
      //   },
      //   {
      //     path: "/Tutorial/install-ubuntu-lts",
      //     name: "install-ubuntu-lts",
      //     // Lazy loading: component hanya didownload saat user membuka halaman ini
      //     component: () =>
      //       import("../components/sistemOperasi/InstallUbuntuLTS.vue"),
      //     meta: {
      //       title: "ナレDev | install-ubuntu-lts",
      //     },
      //   },
      //   {
      //     path: "/Tutorial/dasar-ip-address",
      //     name: "dasar-ip-address",
      //     // Lazy loading: component hanya didownload saat user membuka halaman ini
      //     component: () => import("../components/jaringan/DasarIPAddress.vue"),
      //     meta: {
      //       title: "ナレDev | dasar-ip-address",
      //     },
      //   },
      //   {
      //     path: "/Tutorial/jaringan-komputer",
      //     name: "jaringan-komputer",
      //     // Lazy loading: component hanya didownload saat user membuka halaman ini
      //     component: () => import("../components/jaringan/JaringanKomputer.vue"),
      //     meta: {
      //       title: "ナレDev | jaringan-komputer",
      //     },
      //   },
      //   {
      //     path: "/Tutorial/virtualbox-adalah",
      //     name: "virtualbox-adalah",
      //     component: () =>
      //       import("../components/perangkatLunak/TentangVirtualBox.vue"),
      //     meta: {
      //       title: "ナレDev | virtualbox-adalah",
      //     },
      //   },
      //   {
      //     path: "/Tutorial/terminal-dasar-linux",
      //     name: "terminal-dasar-linux",
      //     component: () =>
      //       import("../components/perangkatLunak/TerminalDasarLinux.vue"),
      //     meta: {
      //       title: "ナレDev | terminal-dasar-linux",
      //     },
      //   },
      //   {
      //     path: "/Tutorial/command-line-dasar-windows",
      //     name: "command-line-dasar-windows",
      //     component: () =>
      //       import("../components/perangkatLunak/CommandLineDasarWindows.vue"),
      //     meta: {
      //       title: "ナレDev | command-line-dasar-windows",
      //     },
      //   },
      //   {
      //     path: "/Tutorial/boot-usb-tidak-terbaca",
      //     name: "boot-usb-tidak-terbaca",
      //     component: () =>
      //       import("../components/troubleshooting/BootUSBTidakTerbaca.vue"),
      //     meta: {
      //       title: "ナレDev | boot-usb-tidak-terbaca",
      //     },
      //   },
      //   {
      //     path: "/Tutorial/remote-server-ssh",
      //     name: "remote-server-ssh",
      //     // Lazy loading: component hanya didownload saat user membuka halaman ini
      //     component: () => import("../components/jaringan/RemoteServerSSH.vue"),
      //     meta: {
      //       title: "ナレDev | remote-server-ssh",
      //     },
      //   },
      //   {
      //     path: "/Tutorial/crimping-kabel-lan",
      //     name: "crimping-kabel-lan",
      //     // Lazy loading: component hanya didownload saat user membuka halaman ini
      //     component: () => import("../components/jaringan/CrimpingKabelLAN.vue"),
      //     meta: {
      //       title: "ナレDev | crimping-kabel-lan",
      //     },
      //   },
      // {
      //   path: "/test",
      //   name: "test",
      //   // Lazy loading: component hanya didownload saat user membuka halaman ini
      //   component: () => import("../components/test.vue"),
      //   meta: {
      //     title: "Galeri Perangkat Keras",
      //   },
      // },
      //   {
      //     path: "/hardware/rakit-pc",
      //     name: "hardware-interactive",
      //     component: () => import("../views/hardware/InteractiveBoard.vue"),
      //     meta: {
      //       title: "Simulasi Rakit PC",
      //     },
      //   },
      //   {
      //     path: "/software/linux-simulator",
      //     name: "linux-simulator",
      //     component: () => import("../views/software/LinuxInstaller.vue"),
      //     meta: {
      //       title: "Simulasi Install Linux",
      //     },
      //   },
      //   {
      //     path: "/software/terminal",
      //     name: "terminal-lab",
      //     component: () => import("../views/software/TerminalLab.vue"),
      //     meta: {
      //       title: "Terminal Playground",
      //     },
      //   },
      //   {
      //     path: "/Tutorial",
      //     name: "tutorial",
      //     component: TutorialView,
      //     meta: {
      //       title: "ナレDev | Tutorial",
      //     },
      //   },
      //   {
      //     path: "/Tentang",
      //     name: "tentang",
      //     component: TentangView,
      //     meta: {
      //       title: "ナレDev | Tentang",
      //     },
      //   },
      // Catch-all route untuk menangani 404 (Halaman tidak ditemukan)
      {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFound,
        meta: {
          title: "404 - Tidak Ditemukan",
        },
      },
    ],
  },
];

const router = createRouter({
  // import.meta.env.BASE_URL berguna jika nanti deploy di subdirectory (misal: domain.com/sysnar/)
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Fitur scroll behavior: saat pindah halaman, otomatis scroll ke paling atas
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Navigation Guard: Untuk mengubah judul tab browser sesuai halaman yang dibuka
router.beforeEach((to, _from, next) => {
  document.title =
    (to.meta.title as string) || "SysNar - Belajar Komputer & Linux";
  next();
});

export default router;
