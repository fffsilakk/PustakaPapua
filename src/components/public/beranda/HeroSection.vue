<template>
  <section
    class="relative overflow-hidden border-b border-slate-200/60 dark:border-slate-800/80 bg-gradient-to-b from-emerald-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950"
  >
    <!-- Accent blur background -->
    <div
      class="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/40 blur-3xl dark:bg-emerald-500/25"
    />
    <div
      class="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl dark:bg-cyan-500/20"
    />

    <div class="relative max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <!-- Left: Text -->
        <div>
          <div class="mb-4 flex flex-wrap items-center gap-2 text-[11px]">
            <span
              class="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-500/10 dark:text-emerald-300"
            >
              <span
                class="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"
              />
              Smart Web for Smart Society
            </span>
            <span
              class="rounded-full border border-slate-200/70 bg-white/60 px-3 py-1 text-slate-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300"
            >
              Offline-First · Papua & Timur Indonesia
            </span>
          </div>

          <h1
            class="text-3xl leading-tight font-bold tracking-tight text-slate-900 dark:text-slate-50 md:text-4xl"
          >
            Smart Pustaka Timur
          </h1>

          <p
            class="mt-3 text-sm text-slate-600 dark:text-slate-300 md:text-base max-w-xl"
          >
            Platform edukasi offline-first, pelestarian budaya digital, dan
            pemberdayaan UMKM lokal untuk generasi Papua dan Indonesia Timur.
            Belajar dan berkarya tetap bisa berjalan meski sinyal terbatas.
          </p>

          <div class="mt-5 flex flex-wrap gap-3">
            <RouterLink
              to="/belajar"
              class="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950"
            >
              Mulai Belajar
            </RouterLink>
            <RouterLink
              to="/budaya"
              class="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 hover:border-emerald-400 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-emerald-400"
            >
              Jelajahi Budaya
            </RouterLink>
          </div>

          <div
            class="mt-4 flex flex-wrap gap-4 text-[11px] text-slate-500 dark:text-slate-400"
          >
            <div class="flex items-center gap-2">
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Konten dapat diakses tanpa internet setelah disimpan.</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              <span
                >Dirancang untuk sekolah dan komunitas di daerah blank
                spot.</span
              >
            </div>
          </div>
        </div>

        <!-- Right: Highlight card -->
        <div class="md:pl-4">
          <div
            class="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-lg shadow-emerald-500/10 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
          >
            <p
              class="text-[11px] font-medium uppercase tracking-wide text-emerald-700 dark:text-emerald-300"
            >
              Tiga Pilar Smart Pustaka
            </p>

            <dl class="mt-3 space-y-3 text-xs">
              <div class="flex gap-3">
                <dt
                  class="mt-0.5 h-6 w-6 flex-none rounded-md bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300 flex items-center justify-center text-[10px] font-semibold"
                >
                  01
                </dt>
                <dd>
                  <p class="font-semibold text-slate-900 dark:text-slate-50">
                    Edukasi Offline-First
                  </p>
                  <p class="text-slate-600 dark:text-slate-300">
                    Modul belajar kontekstual Papua yang bisa diunduh dan
                    dipelajari tanpa koneksi internet.
                  </p>
                </dd>
              </div>

              <div class="flex gap-3">
                <dt
                  class="mt-0.5 h-6 w-6 flex-none rounded-md bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300 flex items-center justify-center text-[10px] font-semibold"
                >
                  02
                </dt>
                <dd>
                  <p class="font-semibold text-slate-900 dark:text-slate-50">
                    Pelestarian Budaya Digital
                  </p>
                  <p class="text-slate-600 dark:text-slate-300">
                    Galeri tarian, bahasa, dan cerita lokal yang mudah diakses
                    generasi muda.
                  </p>
                </dd>
              </div>

              <div class="flex gap-3">
                <dt
                  class="mt-0.5 h-6 w-6 flex-none rounded-md bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-300 flex items-center justify-center text-[10px] font-semibold"
                >
                  03
                </dt>
                <dd>
                  <p class="font-semibold text-slate-900 dark:text-slate-50">
                    UMKM Go-Digital
                  </p>
                  <p class="text-slate-600 dark:text-slate-300">
                    Katalog produk lokal sebagai jembatan menuju ekonomi digital
                    yang inklusif.
                  </p>
                </dd>
              </div>
            </dl>

            <div class="mt-4 grid grid-cols-3 gap-3 text-center text-[11px]">
              <div
                class="rounded-lg border border-slate-200 bg-white/60 px-2 py-2 dark:border-slate-700 dark:bg-slate-900/80"
              >
                <p
                  class="text-sm font-semibold text-slate-900 dark:text-slate-50"
                >
                  3
                </p>
                <p class="text-slate-500 dark:text-slate-400">Modul inti</p>
              </div>
              <div
                class="rounded-lg border border-slate-200 bg-white/60 px-2 py-2 dark:border-slate-700 dark:bg-slate-900/80"
              >
                <p
                  class="text-sm font-semibold text-slate-900 dark:text-slate-50"
                >
                  Offline
                </p>
                <p class="text-slate-500 dark:text-slate-400">PWA siap pakai</p>
              </div>
              <div
                class="rounded-lg border border-slate-200 bg-white/60 px-2 py-2 dark:border-slate-700 dark:bg-slate-900/80"
              >
                <p
                  class="text-sm font-semibold text-slate-900 dark:text-slate-50"
                >
                  Timur
                </p>
                <p class="text-slate-500 dark:text-slate-400">Fokus Papua</p>
              </div>
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
