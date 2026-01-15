<template>
  <section class="max-w-6xl mx-auto px-4 py-8 md:py-10">
    <header class="mb-6 md:mb-8">
      <h2
        class="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-50"
      >
        Tiga Pilar Smart Pustaka Timur
      </h2>
      <p class="text-sm text-slate-600 dark:text-slate-300 max-w-2xl mt-1">
        Satu platform yang menghubungkan pendidikan, pelestarian budaya, dan
        pemberdayaan ekonomi digital bagi generasi Papua dan Indonesia Timur.
      </p>
    </header>

    <div class="grid gap-4 md:grid-cols-3">
      <!-- Belajar -->
      <RouterLink
        to="/belajar"
        class="group relative rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition text-left dark:border-slate-800 dark:bg-slate-900/80"
      >
        <div
          class="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300"
        >
          <span class="text-[14px] font-semibold">EDU</span>
        </div>
        <h3
          class="text-sm font-semibold text-slate-900 group-hover:text-emerald-600 dark:text-slate-50 dark:group-hover:text-emerald-300"
        >
          Belajar Offline-First
        </h3>
        <p class="mt-1 text-xs text-slate-600 dark:text-slate-300">
          Modul belajar coding dasar, agrikultur, dan bahasa Inggris yang bisa
          disimpan dan diakses tanpa internet.
        </p>
        <p class="mt-3 text-[11px] text-emerald-700 dark:text-emerald-300">
          Lihat modul belajar →
        </p>
      </RouterLink>

      <!-- Budaya -->
      <RouterLink
        to="/budaya"
        class="group relative rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition text-left dark:border-slate-800 dark:bg-slate-900/80"
      >
        <div
          class="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300"
        >
          <span class="text-[14px] font-semibold">ART</span>
        </div>
        <h3
          class="text-sm font-semibold text-slate-900 group-hover:text-cyan-600 dark:text-slate-50 dark:group-hover:text-cyan-300"
        >
          Pelestarian Budaya Digital
        </h3>
        <p class="mt-1 text-xs text-slate-600 dark:text-slate-300">
          Dokumentasi tarian, bahasa daerah, dan cerita lokal Papua dalam bentuk
          galeri digital yang mudah dijelajahi.
        </p>
        <p class="mt-3 text-[11px] text-cyan-700 dark:text-cyan-300">
          Jelajahi budaya →
        </p>
      </RouterLink>

      <!-- UMKM -->
      <RouterLink
        to="/umkm"
        class="group relative rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition text-left dark:border-slate-800 dark:bg-slate-900/80"
      >
        <div
          class="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-300"
        >
          <span class="text-[14px] font-semibold">UMKM</span>
        </div>
        <h3
          class="text-sm font-semibold text-slate-900 group-hover:text-amber-600 dark:text-slate-50 dark:group-hover:text-amber-300"
        >
          UMKM Go-Digital
        </h3>
        <p class="mt-1 text-xs text-slate-600 dark:text-slate-300">
          Katalog produk lokal seperti kopi, noken, dan hasil tani sebagai
          langkah awal menuju pemasaran digital yang inklusif.
        </p>
        <p class="mt-3 text-[11px] text-amber-700 dark:text-amber-300">
          Lihat produk UMKM →
        </p>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
