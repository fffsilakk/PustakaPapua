<template>
  <section
    class="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 px-4 md:px-10 lg:px-16 xl:px-24 pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
  >
    <!-- Accent blur -->
    <div
      class="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/40 blur-3xl dark:bg-emerald-500/25"
    />
    <div
      class="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl dark:bg-cyan-500/20"
    />

    <!-- Left -->
    <div
      class="relative flex flex-col items-center md:items-start max-w-xl z-10"
    >
      <!-- Avatar group -->
      <div
        class="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full border border-slate-300 bg-white/80 text-slate-800 text-xs backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
      >
        <div class="flex items-center">
          <img
            class="size-7 rounded-full ring-2 ring-white dark:ring-slate-900"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
            alt="user-1"
          />
          <img
            class="size-7 rounded-full ring-2 ring-white -translate-x-2 dark:ring-slate-900"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
            alt="user-2"
          />
          <img
            class="size-7 rounded-full ring-2 ring-white -translate-x-4 dark:ring-slate-900"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
            alt="user-3"
          />
        </div>
        <p class="-translate-x-2 whitespace-nowrap">
          Komunitas pelajar & kreator Papua
        </p>
      </div>

      <!-- Pill -->
      <div class="mt-4 flex flex-wrap items-center gap-2 text-[11px]">
        <span
          class="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-emerald-700 dark:text-emerald-300 dark:border-emerald-400/40 dark:bg-emerald-500/10"
        >
          <span class="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Smart Web for Smart Society
        </span>
        <span
          class="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-slate-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300"
        >
          Offline-First · Papua & Timur Indonesia
        </span>
      </div>

      <!-- Heading -->
      <h1
        class="mt-4 text-center md:text-left text-3xl leading-[40px] md:text-5xl md:leading-[56px] lg:text-6xl lg:leading-[68px] font-semibold tracking-tight text-slate-900 dark:text-slate-50"
      >
        Smart Pustaka Papua,
        <span class="text-emerald-600 dark:text-emerald-400">
          belajar tanpa batas sinyal.
        </span>
      </h1>

      <!-- Description -->
      <p
        class="mt-3 text-center md:text-left text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-lg"
      >
        Platform edukasi offline-first, pelestarian budaya digital, dan
        pemberdayaan UMKM lokal untuk sekolah, komunitas, dan generasi muda di
        Papua dan Indonesia Timur.
      </p>

      <!-- CTA -->
      <div
        class="mt-8 flex flex-col sm:flex-row items-center gap-3 text-sm w-full sm:w-auto"
      >
        <RouterLink
          to="/belajar"
          class="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-md px-7 h-11 w-full sm:w-auto active:scale-95 transition"
        >
          Mulai Belajar
        </RouterLink>
        <RouterLink
          to="/budaya"
          class="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-800 bg-white/70 hover:bg-slate-50 rounded-md px-6 h-11 w-full sm:w-auto active:scale-95 transition dark:border-slate-700 dark:text-slate-100 dark:bg-slate-900/80 dark:hover:bg-slate-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-video"
          >
            <path
              d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
            />
            <rect x="2" y="6" width="14" height="12" rx="2" />
          </svg>
          <span>Eksplore Budaya</span>
        </RouterLink>
      </div>

      <!-- bullets -->
      <div
        class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] text-slate-500 dark:text-slate-400 w-full"
      >
        <div class="flex items-center gap-2">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>Konten bisa diakses offline setelah disimpan.</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="h-1.5 w-1.5 rounded-full bg-cyan-500" />
          <span>Ringan di perangkat sekolah & HP jadul.</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="h-1.5 w-1.5 rounded-full bg-amber-500" />
          <span>Siap dipakai di daerah blank spot.</span>
        </div>
      </div>
    </div>

    <!-- Right: Image/card -->
    <div
      class="relative w-full md:w-auto flex justify-center md:justify-end z-10"
    >
      <div
        class="relative w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-3xl border border-slate-200 bg-white/90 shadow-xl overflow-hidden dark:border-slate-800 dark:bg-slate-900/90"
      >
        <!-- top pill -->
        <div
          class="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-100 border border-slate-700/70 backdrop-blur"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Mode Offline Aktif</span>
        </div>

        <!-- gambar dibatasi tinggi -->
        <div class="w-full max-h-[320px] md:max-h-[360px] overflow-hidden">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-3.png"
            alt="Smart Pustaka mockup"
            class="w-full h-full object-contain"
          />
        </div>

        <!-- bottom stats -->
        <div
          class="p-4 border-t border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-slate-950/80"
        >
          <p
            class="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3"
          >
            Tiga Pilar Smart Pustaka
          </p>
          <div class="grid grid-cols-3 gap-3 text-[11px]">
            <div
              class="rounded-lg border border-slate-200 bg-slate-50 px-2 py-2 text-center dark:border-slate-800 dark:bg-slate-900/80"
            >
              <p
                class="text-sm font-semibold text-slate-900 dark:text-slate-50"
              >
                Edukasi
              </p>
              <p class="text-slate-500 dark:text-slate-400">
                Modul kontekstual
              </p>
            </div>
            <div
              class="rounded-lg border border-slate-200 bg-slate-50 px-2 py-2 text-center dark:border-slate-800 dark:bg-slate-900/80"
            >
              <p
                class="text-sm font-semibold text-slate-900 dark:text-slate-50"
              >
                Budaya
              </p>
              <p class="text-slate-500 dark:text-slate-400">Galeri digital</p>
            </div>
            <div
              class="rounded-lg border border-slate-200 bg-slate-50 px-2 py-2 text-center dark:border-slate-800 dark:bg-slate-900/80"
            >
              <p
                class="text-sm font-semibold text-slate-900 dark:text-slate-50"
              >
                UMKM
              </p>
              <p class="text-slate-500 dark:text-slate-400">Produk lokal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
