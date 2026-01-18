<template>
  <section class="max-w-6xl mx-auto px-4 py-12 md:py-16">
    <!-- Header -->
    <header class="mb-8 md:mb-12 text-center md:text-left">
      <div
        class="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-3 dark:bg-emerald-500/20 dark:text-emerald-300"
      >
        <span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        Cara Kerja Platform
      </div>
      <h2
        class="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent dark:from-slate-100 dark:to-slate-50"
      >
        Pustaka Papua
      </h2>
      <p
        class="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl md:max-w-3xl mx-auto md:mx-0"
      >
        Dirancang untuk wilayah sinyal tidak stabil: konten diunduh sekali saat
        online, lalu dapat diakses kembali secara offline oleh siswa, guru, dan
        komunitas.
      </p>
    </header>

    <!-- Steps Timeline -->
    <div class="relative">
      <!-- Vertical line connector -->
      <div
        class="absolute left-1/2 top-0 -bottom-12 md:-bottom-16 w-px bg-gradient-to-b from-emerald-400/30 via-cyan-400/30 to-amber-400/30 transform -translate-x-1/2"
      />

      <!-- Steps Grid -->
      <div class="grid gap-6 md:grid-cols-3">
        <!-- Step 1 -->
        <div class="group relative">
          <div
            class="absolute -left-6 top-6 w-12 h-12 md:hidden bg-emerald-500/10 rounded-full"
          />
          <div
            class="relative flex flex-col items-center md:items-start p-6 rounded-2xl border border-slate-200/50 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-300/70 transition-all duration-500 md:hover:border-l-4 md:hover:border-emerald-400 dark:border-slate-800/50 dark:bg-slate-900/70 dark:hover:border-emerald-500/70"
          >
            <!-- Step number -->
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-400/10 text-emerald-600 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-emerald-200/50 dark:from-emerald-500/20 dark:to-emerald-400/20 dark:text-emerald-300 dark:border-emerald-400/30"
            >
              <span class="text-lg font-bold">1</span>
            </div>

            <h3
              class="text-base font-semibold text-slate-900 mb-2 group-hover:text-emerald-600 dark:text-slate-50 dark:group-hover:text-emerald-300"
            >
              Akses & Unduh
            </h3>
            <p
              class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              Saat ada internet, pilih modul belajar atau budaya, lalu simpan
              untuk mode offline.
            </p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="group relative">
          <div
            class="absolute -left-6 top-6 w-12 h-12 md:hidden bg-cyan-500/10 rounded-full"
          />
          <div
            class="relative flex flex-col items-center md:items-start p-6 rounded-2xl border border-slate-200/50 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-cyan-300/70 transition-all duration-500 md:hover:border-l-4 md:hover:border-cyan-400 dark:border-slate-800/50 dark:bg-slate-900/70 dark:hover:border-cyan-500/70"
          >
            <!-- Step number -->
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-400/10 text-cyan-600 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-cyan-200/50 dark:from-cyan-500/20 dark:to-cyan-400/20 dark:text-cyan-300 dark:border-cyan-400/30"
            >
              <span class="text-lg font-bold">2</span>
            </div>

            <h3
              class="text-base font-semibold text-slate-900 mb-2 group-hover:text-cyan-600 dark:text-slate-50 dark:group-hover:text-cyan-300"
            >
              Belajar Offline
            </h3>
            <p
              class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              Di blank spot atau data mati, siswa tetap bisa akses modul yang
              sudah tersimpan.
            </p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="group relative">
          <div
            class="absolute -left-6 top-6 w-12 h-12 md:hidden bg-amber-500/10 rounded-full"
          />
          <div
            class="relative flex flex-col items-center md:items-start p-6 rounded-2xl border border-slate-200/50 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-amber-300/70 transition-all duration-500 md:hover:border-l-4 md:hover:border-amber-400 dark:border-slate-800/50 dark:bg-slate-900/70 dark:hover:border-amber-500/70"
          >
            <!-- Step number -->
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-400/10 text-amber-600 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-amber-200/50 dark:from-amber-500/20 dark:to-amber-400/20 dark:text-amber-300 dark:border-amber-400/30"
            >
              <span class="text-lg font-bold">3</span>
            </div>

            <h3
              class="text-base font-semibold text-slate-900 mb-2 group-hover:text-amber-600 dark:text-slate-50 dark:group-hover:text-amber-300"
            >
              Update & UMKM
            </h3>
            <p
              class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              Kembali online untuk update konten baru dan transaksi katalog UMKM
              digital.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
