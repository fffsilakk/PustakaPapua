<template>
  <section class="max-w-6xl mx-auto px-4 py-10 md:py-14">
    <header
      class="mb-6 md:mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3"
    >
      <div>
        <h2
          class="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-50"
        >
          Tiga Pilar Smart Pustaka Timur
        </h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 max-w-2xl mt-1">
          Satu platform yang menghubungkan pendidikan, pelestarian budaya, dan
          pemberdayaan ekonomi digital bagi generasi Papua dan Indonesia Timur.
        </p>
      </div>
      <p
        class="text-[11px] uppercase tracking-wide text-slate-400 dark:text-slate-500"
      >
        Edukasi · Budaya · UMKM
      </p>
    </header>

    <div class="grid gap-4 md:gap-5 md:grid-cols-3">
      <!-- Belajar -->
      <RouterLink
        to="/belajar"
        class="group relative rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-emerald-400/60 transition-all duration-300 text-left dark:border-slate-800/80 dark:bg-slate-900/80"
      >
        <!-- gradient highlight on hover -->
        <div
          class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/10"
        />
        <div class="relative">
          <div
            class="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300 group-hover:scale-105 transition-transform duration-300"
          >
            <span class="text-[13px] font-semibold">EDU</span>
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
          <div class="mt-3 flex items-center justify-between text-[11px]">
            <p class="text-emerald-700 dark:text-emerald-300">
              Lihat modul belajar
            </p>
            <span
              class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 group-hover:translate-x-0.5 transition-transform duration-300 dark:bg-emerald-500/20 dark:text-emerald-300"
            >
              →
            </span>
          </div>
        </div>
      </RouterLink>

      <!-- Budaya -->
      <RouterLink
        to="/budaya"
        class="group relative rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-cyan-400/60 transition-all duration-300 text-left dark:border-slate-800/80 dark:bg-slate-900/80"
      >
        <div
          class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-500/10"
        />
        <div class="relative">
          <div
            class="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300 group-hover:scale-105 transition-transform duration-300"
          >
            <span class="text-[13px] font-semibold">ART</span>
          </div>
          <h3
            class="text-sm font-semibold text-slate-900 group-hover:text-cyan-600 dark:text-slate-50 dark:group-hover:text-cyan-300"
          >
            Pelestarian Budaya Digital
          </h3>
          <p class="mt-1 text-xs text-slate-600 dark:text-slate-300">
            Dokumentasi tarian, bahasa daerah, dan cerita lokal Papua dalam
            bentuk galeri digital yang mudah dijelajahi.
          </p>
          <div class="mt-3 flex items-center justify-between text-[11px]">
            <p class="text-cyan-700 dark:text-cyan-300">Jelajahi budaya</p>
            <span
              class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 group-hover:translate-x-0.5 transition-transform duration-300 dark:bg-cyan-500/20 dark:text-cyan-300"
            >
              →
            </span>
          </div>
        </div>
      </RouterLink>

      <!-- UMKM -->
      <RouterLink
        to="/umkm"
        class="group relative rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-amber-400/70 transition-all duration-300 text-left dark:border-slate-800/80 dark:bg-slate-900/80"
      >
        <div
          class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/10"
        />
        <div class="relative">
          <div
            class="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-300 group-hover:scale-105 transition-transform duration-300"
          >
            <span class="text-[13px] font-semibold">UMKM</span>
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
          <div class="mt-3 flex items-center justify-between text-[11px]">
            <p class="text-amber-700 dark:text-amber-300">Lihat produk UMKM</p>
            <span
              class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 group-hover:translate-x-0.5 transition-transform duration-300 dark:bg-amber-500/20 dark:text-amber-300"
            >
              →
            </span>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
