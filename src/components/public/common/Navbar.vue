<template>
  <!-- ========== HEADER ========== -->
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300',
      isScrolled
        ? 'bg-white/90 border-gray-200 shadow-lg shadow-gray-200/50 dark:bg-neutral-800/90 dark:border-neutral-700 dark:shadow-neutral-900/50'
        : 'bg-white/95 border-gray-200 dark:bg-neutral-800/95 dark:border-neutral-700',
    ]"
  >
    <!-- Topbar -->
    <div class="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div class="flex-1 flex items-center justify-end gap-x-2 pt-1 mr-2">
        <dark-mode class="shrink-0 size-2.5" />
        <a
          href="https://github.com/fffsilakk/SmartPustaka"
          target="_blank"
          title="Github"
          rel="noopener"
        >
          <ChGithub class="shrink-0" />
        </a>
        <ConnectionStatus />
      </div>
    </div>
    <!-- End Topbar -->
    <nav
      class="relative max-w-[85rem] w-full mx-auto flex items-center justify-between gap-3 py-2 px-4 sm:px-6 lg:px-8"
    >
      <!-- Logo -->
      <router-link to="/">
        <a
          class="flex items-center gap-1 font-bold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white group transition-all duration-300 hover:scale-105"
          aria-label="Brand"
        >
          <!-- Logo Badge -->
          <div
            class="flex h-9 w-13 items-center justify-center transition-all duration-300"
          >
            <img
              src="/Logo/Logoo.png"
              alt="NareDev"
              class="h-8 w-full transition-transform hover:rotate-6"
            />
          </div>
          <span
            class="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-cyan-400"
          >
            Pustaka
            <span class="block -mt-2"> Papua </span>
          </span>
        </a>
      </router-link>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobileMenu"
        type="button"
        class="md:hidden relative p-2 flex items-center font-medium text-sm rounded-lg border border-gray-200 text-gray-800 hover:bg-emerald-50 hover:border-emerald-500/50 hover:text-emerald-600 focus:outline-none focus:bg-emerald-50 transition-all duration-300 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700"
        aria-label="Toggle navigation"
      >
        <QuHamburgerSidebar
          class="size-5 transition-transform duration-300"
          :class="{ 'rotate-90': isMobileMenuOpen }"
          width="24"
          height="24"
        />
      </button>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex md:items-center md:gap-1">
        <!-- Beranda -->
        <router-link to="/">
          <a
            class="group relative px-4 py-2 flex items-center text-sm font-medium rounded-lg transition-all duration-300 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 overflow-hidden"
            aria-current="page"
          >
            <span
              class="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]"
            ></span>
            <span class="relative z-10">Beranda</span>
          </a>
        </router-link>

        <!-- Tutorial -->
        <router-link to="/belajar">
          <a
            class="group relative px-4 py-2 flex items-center text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-emerald-600 rounded-lg focus:outline-none focus:bg-gray-100 transition-all duration-300 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-emerald-400"
          >
            <span>Belajar</span>
            <span
              class="absolute bottom-1 left-2 right-2 h-0.5 scale-x-0 rounded-full bg-emerald-500 transition-transform duration-300 group-hover:scale-x-100"
            ></span>
          </a>
        </router-link>
        <!-- Tutorial -->
        <router-link to="/budaya">
          <a
            class="group relative px-4 py-2 flex items-center text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-emerald-600 rounded-lg focus:outline-none focus:bg-gray-100 transition-all duration-300 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-emerald-400"
          >
            <span>Budaya</span>
            <span
              class="absolute bottom-1 left-2 right-2 h-0.5 scale-x-0 rounded-full bg-emerald-500 transition-transform duration-300 group-hover:scale-x-100"
            ></span>
          </a>
        </router-link>
        <!-- <div class="m-1 hs-dropdown [--trigger:hover] relative inline-flex">
          <button
            id="hs-dropdown-hover-event"
            type="button"
            class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            Culture
            <svg
              class="hs-dropdown-open:rotate-180 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-dropdown-hover-event"
          >
            <div class="p-1 space-y-0.5">
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Bahasa Daerah
              </a>
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Tarian Tradisional
              </a>
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Alat Musik Tradisional
              </a>
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Pakaian Adat
              </a>
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Rumah Adat
              </a>
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Cerita Rakyat
              </a>
            </div>
          </div>
        </div> -->

        <!-- Tentang -->
        <router-link to="/umkm">
          <a
            class="group relative px-4 py-2 flex items-center text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-emerald-600 rounded-lg focus:outline-none focus:bg-gray-100 transition-all duration-300 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-emerald-400"
          >
            <span>UMKM</span>
            <span
              class="absolute bottom-1 left-2 right-2 h-0.5 scale-x-0 rounded-full bg-emerald-500 transition-transform duration-300 group-hover:scale-x-100"
            ></span>
          </a>
        </router-link>
        <router-link to="/cart">
          <a
            class="group relative px-4 py-2 flex items-center text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-emerald-600 rounded-lg focus:outline-none focus:bg-gray-100 transition-all duration-300 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-emerald-400"
          >
            <span>Cart</span>
            <span
              class="absolute bottom-1 left-2 right-2 h-0.5 scale-x-0 rounded-full bg-emerald-500 transition-transform duration-300 group-hover:scale-x-100"
            ></span>
          </a>
        </router-link>

        <!-- Divider -->
        <div class="mx-1">
          <div class="w-px h-6 bg-gray-300 dark:bg-neutral-700"></div>
        </div>

        <!-- Search Button -->
        <button
          type="button"
          class="group p-2 flex items-center text-sm text-gray-800 hover:text-emerald-600 rounded-lg focus:outline-none transition-all duration-300 dark:text-neutral-200 dark:hover:text-emerald-400"
        >
          <SearchButton
            class="transition-transform duration-300 group-hover:scale-110"
          />
        </button>
      </div>
    </nav>
  </header>

  <!-- Mobile Menu Overlay -->
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        @click="closeMobileMenu"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        aria-hidden="true"
      ></div>
    </Transition>

    <!-- Mobile Menu Sidebar -->
    <Transition
      enter-active-class="transition-transform duration-300"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-300"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed top-0 left-0 h-full w-full max-w-xs bg-white border-r border-gray-200 z-50 overflow-y-auto md:hidden dark:bg-neutral-800 dark:border-neutral-700"
        role="dialog"
        aria-label="Mobile Navigation"
      >
        <!-- Mobile Menu Header -->
        <div
          class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-neutral-700"
        >
          <h3 class="font-bold text-gray-800 dark:text-white">PustakaPapua</h3>
          <button
            @click="closeMobileMenu"
            type="button"
            class="size-8 inline-flex justify-center items-center rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none transition-all dark:bg-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-600"
            aria-label="Close menu"
          >
            <svg
              class="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Items -->
        <div class="p-2 space-y-1">
          <!-- Beranda -->
          <router-link to="/" @click="closeMobileMenu">
            <a
              class="p-3 flex items-center gap-3 text-sm rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-500/30 transition-all duration-300 hover:shadow-lg"
            >
              <IcHomeAlt class="size-5" width="24" height="24" />
              <span class="font-medium">Beranda</span>
            </a>
          </router-link>

          <!-- Tutorial -->
          <router-link to="/belajar" @click="closeMobileMenu">
            <a
              class="p-3 flex items-center gap-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-emerald-600 rounded-lg focus:outline-none transition-all duration-300 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-emerald-400"
            >
              <svg
                class="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span class="font-medium">Belajar</span>
            </a>
          </router-link>

          <!-- Budaya -->
          <router-link to="/budaya" @click="closeMobileMenu">
            <a
              class="p-3 flex items-center gap-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-emerald-600 rounded-lg focus:outline-none transition-all duration-300 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-emerald-400"
            >
              <TaOutlineArrowRoundaboutRight
                class="size-5"
                width="24"
                height="24"
              />
              <span class="font-medium">Budaya</span>
            </a>
          </router-link>
          <!-- UMKM -->
          <router-link to="/umkm" @click="closeMobileMenu">
            <a
              class="p-3 flex items-center gap-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-emerald-600 rounded-lg focus:outline-none transition-all duration-300 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-emerald-400"
            >
              <TaOutlineArrowRoundaboutRight
                class="size-5"
                width="24"
                height="24"
              />
              <span class="font-medium">UMKM</span>
            </a>
          </router-link>
          <!-- Cart -->
          <router-link to="/cart" @click="closeMobileMenu">
            <a
              class="p-3 flex items-center gap-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-emerald-600 rounded-lg focus:outline-none transition-all duration-300 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-emerald-400"
            >
              <TaOutlineArrowRoundaboutRight
                class="size-5"
                width="24"
                height="24"
              />
              <span class="font-medium">Cart</span>
            </a>
          </router-link>

          <!-- Divider -->
          <div class="py-2">
            <div class="border-t border-gray-200 dark:border-neutral-700"></div>
          </div>

          <!-- Search Button -->
          <button
            type="button"
            class="w-full cursor-pointer p-2 flex items-center gap-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-emerald-600 rounded-lg focus:outline-none transition-all duration-300 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-emerald-400"
          >
            <SearchButton />
            <span class="font-medium">Search</span>
          </button>

          <!-- Dark Mode Button -->
          <button
            type="button"
            class="w-full cursor-pointer p-2 flex items-center gap-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-emerald-600 rounded-lg focus:outline-none transition-all duration-300 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-emerald-400"
          >
            <DarkMode class="mb-2" />
            <span class="font-medium">Theme</span>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>

  <!-- Spacer to prevent content from going under fixed navbar -->
  <div class="h-[60px]"></div>
  <!-- ========== END HEADER ========== -->
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import DarkMode from "../../../services/DarkMode.vue";
import SearchButton from "../../../services/SearchButton.vue";

import ConnectionStatus from "../common/ConnectionStatus.vue";
import {
  IcHomeAlt,
  TaOutlineArrowRoundaboutRight,
  QuHamburgerSidebar,
  ChGithub,
} from "@kalimahapps/vue-icons";

// State management
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = "";
};

// Handle scroll event
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

// Close menu on escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === "Escape" && isMobileMenuOpen.value) {
    closeMobileMenu();
  }
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("keydown", handleEscape);
  document.body.style.overflow = "";
});
</script>

<style scoped>
/* Optional: Additional custom styles if needed */
</style>
