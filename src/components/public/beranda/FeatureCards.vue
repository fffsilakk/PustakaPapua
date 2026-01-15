<template>
  <section
    class="relative max-w-6xl mx-auto px-6 py-16 md:py-24 overflow-hidden"
  >
    <header
      class="relative z-10 mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      data-aos="fade-right"
    >
      <div class="max-w-2xl">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-4"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
            ></span>
          </span>
          Ekosistem Digital
        </div>
        <h2
          class="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Tiga Pilar
          <span class="text-emerald-600 dark:text-emerald-400"
            >Smart Pustaka</span
          >
        </h2>
        <p
          class="text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed"
        >
          Menghubungkan pendidikan, pelestarian budaya, dan pemberdayaan ekonomi
          digital dalam satu ekosistem yang inklusif untuk masa depan Indonesia
          Timur.
        </p>
      </div>
      <div class="hidden md:block text-right">
        <div class="flex flex-col items-end gap-1">
          <span
            class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400"
            >Navigasi Utama</span
          >
          <div
            class="h-1 w-24 bg-gradient-to-l from-emerald-500 to-transparent rounded-full"
          ></div>
        </div>
      </div>
    </header>

    <div class="grid gap-6 md:gap-8 md:grid-cols-3 relative z-10">
      <RouterLink
        to="/belajar"
        data-aos="fade-up"
        data-aos-delay="100"
        class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-500 bg-white border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 dark:bg-slate-900/40 dark:border-slate-800 dark:hover:border-emerald-500/50 p-6 md:p-8"
      >
        <div
          class="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors duration-500"
        ></div>

        <div class="relative">
          <div
            class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-200 dark:shadow-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Pendidikan <br />Offline-First
          </h3>
          <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Akses modul coding, agrikultur, dan bahasa tanpa perlu khawatir
            sinyal hilang.
          </p>
        </div>

        <div
          class="mt-8 flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400"
        >
          <span>Lihat Modul</span>
          <svg
            class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="3"
          >
            <path d="M13 5l7 7-7 7M5 12h15" />
          </svg>
        </div>
      </RouterLink>

      <RouterLink
        to="/budaya"
        data-aos="fade-up"
        data-aos-delay="200"
        class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-500 bg-white border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 dark:bg-slate-900/40 dark:border-slate-800 dark:hover:border-cyan-500/50 p-6 md:p-8"
      >
        <div
          class="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-500"
        ></div>

        <div class="relative">
          <div
            class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-white shadow-lg shadow-cyan-200 dark:shadow-none transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Pelestarian <br />Budaya Digital
          </h3>
          <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Arsip digital tarian dan tradisi untuk menjaga nyala identitas
            generasi Timur.
          </p>
        </div>

        <div
          class="mt-8 flex items-center gap-2 text-sm font-bold text-cyan-600 dark:text-cyan-400"
        >
          <span>Jelajahi Galeri</span>
          <svg
            class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="3"
          >
            <path d="M13 5l7 7-7 7M5 12h15" />
          </svg>
        </div>
      </RouterLink>

      <RouterLink
        to="/umkm"
        data-aos="fade-up"
        data-aos-delay="300"
        class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-500 bg-white border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2 dark:bg-slate-900/40 dark:border-slate-800 dark:hover:border-amber-500/50 p-6 md:p-8"
      >
        <div
          class="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors duration-500"
        ></div>

        <div class="relative">
          <div
            class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg shadow-amber-200 dark:shadow-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Pemberdayaan <br />Ekonomi UMKM
          </h3>
          <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Mendorong produk lokal Papua menembus pasar digital melalui katalog
            cerdas.
          </p>
        </div>

        <div
          class="mt-8 flex items-center gap-2 text-sm font-bold text-amber-600 dark:text-amber-400"
        >
          <span>Pasarkan Produk</span>
          <svg
            class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="3"
          >
            <path d="M13 5l7 7-7 7M5 12h15" />
          </svg>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
