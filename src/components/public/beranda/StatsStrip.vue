<template>
  <section
    class="border-y border-slate-200/70 bg-slate-50/80 py-10 md:py-14 dark:border-slate-800/80 dark:bg-slate-900/60"
  >
    <div class="max-w-6xl mx-auto px-4">
      <!-- Label atas -->
      <div
        class="flex items-center justify-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 mb-6"
      >
        <span class="h-px w-6 bg-slate-200 dark:bg-slate-700" />
        <span class="uppercase tracking-[0.18em]">
          Fondasi Smart Pustaka Timur
        </span>
        <span class="h-px w-6 bg-slate-200 dark:bg-slate-700" />
      </div>

      <!-- Timeline wrapper -->
      <div
        class="relative flex flex-col gap-8 text-[11px] text-slate-600 md:flex-row md:items-stretch md:justify-between dark:text-slate-300"
      >
        <!-- Garis tengah responsif -->
        <div
          class="pointer-events-none absolute left-4 top-4 bottom-4 md:left-1/2 md:top-1/2 md:bottom-auto md:h-px md:-translate-x-1/2 md:w-[68%] rounded-full bg-gradient-to-b from-emerald-400/40 via-cyan-400/40 to-amber-400/40 md:bg-gradient-to-r"
        />

        <!-- Item 1 -->
        <div class="relative flex items-start gap-3 md:flex-1 md:pr-6">
          <!-- Dot + connector -->
          <div class="flex flex-col items-center">
            <div
              class="relative flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 shadow-sm dark:bg-emerald-500/20 dark:text-emerald-300"
            >
              <span
                class="absolute inset-0 rounded-full border border-emerald-400/30 animate-pulse"
              />
              <span class="relative h-2 w-2 rounded-full bg-emerald-500" />
            </div>
            <div class="mt-2 h-full w-px bg-emerald-400/35 md:hidden" />
          </div>

          <!-- Content -->
          <div>
            <p
              class="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
            >
              3 Modul Inti
            </p>
            <h3
              class="mt-1 text-[12px] font-semibold text-slate-900 dark:text-slate-50"
            >
              Edukasi, Budaya, UMKM
            </h3>
            <p class="mt-1 max-w-xs">
              Edukasi, budaya, dan UMKM menyatu dalam satu platform terintegrasi
              untuk generasi Timur.
            </p>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="relative flex items-start gap-3 md:flex-1 md:px-6">
          <div class="flex flex-col items-center">
            <div
              class="relative flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 shadow-sm dark:bg-cyan-500/20 dark:text-cyan-300"
            >
              <span
                class="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping"
              />
              <span class="relative h-2 w-2 rounded-full bg-cyan-400" />
            </div>
            <div class="mt-2 h-full w-px bg-cyan-400/35 md:hidden" />
          </div>

          <div class="text-left md:text-center">
            <p
              class="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-2.5 py-1 text-[10px] font-semibold text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300"
            >
              Offline-First PWA
            </p>
            <h3
              class="mt-1 text-[12px] font-semibold text-slate-900 dark:text-slate-50"
            >
              Unduh Sekali, Akses Berulang
            </h3>
            <p class="mt-1 max-w-xs mx-auto md:mx-auto">
              Konten diunduh saat ada sinyal, lalu tetap dapat diakses di daerah
              blank spot tanpa internet.
            </p>
          </div>
        </div>

        <!-- Item 3 -->
        <div class="relative flex items-start gap-3 md:flex-1 md:pl-6">
          <div class="flex flex-col items-center">
            <div
              class="relative flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 shadow-sm dark:bg-amber-500/20 dark:text-amber-300"
            >
              <span
                class="absolute inset-0 rounded-full border border-amber-400/30 animate-pulse"
              />
              <span class="relative h-2 w-2 rounded-full bg-amber-400" />
            </div>
            <div class="mt-2 h-full w-px bg-amber-400/35 md:hidden" />
          </div>

          <div class="text-left md:text-right">
            <p
              class="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold text-amber-700 dark:bg-amber-500/15 dark:text-amber-300"
            >
              Fokus Papua
            </p>
            <h3
              class="mt-1 text-[12px] font-semibold text-slate-900 dark:text-slate-50"
            >
              Konteks Timur Indonesia
            </h3>
            <p class="mt-1 max-w-xs">
              Dirancang sesuai realitas sosial, budaya, dan infrastruktur
              Indonesia Timur, bukan solusi generik.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
