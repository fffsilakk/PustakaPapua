<template>
  <section
    class="relative overflow-hidden border-y border-slate-200/60 py-16 md:py-24 bg-slate-50/50 dark:border-slate-800/50 dark:bg-[#020617]"
  >
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 dark:opacity-20"
    >
      <div
        class="absolute top-0 left-1/4 w-64 h-64 bg-emerald-400/20 blur-[100px] rounded-full"
      ></div>
      <div
        class="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-400/20 blur-[100px] rounded-full"
      ></div>
    </div>

    <div class="max-w-6xl mx-auto px-6">
      <div
        class="flex items-center justify-center gap-4 mb-16"
        data-aos="fade-down"
      >
        <span
          class="h-px w-10 bg-gradient-to-r from-transparent to-slate-300 dark:to-slate-700"
        />
        <span
          class="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500"
        >
          Fondasi Pustaka Papua
        </span>
        <span
          class="h-px w-10 bg-gradient-to-l from-transparent to-slate-300 dark:to-slate-700"
        />
      </div>

      <div class="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        <div
          class="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-amber-500/20"
        ></div>

        <div
          class="group relative flex flex-col items-center md:items-start text-center md:text-left"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            class="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white border border-slate-200 shadow-xl transition-transform duration-500 group-hover:-rotate-12 dark:bg-slate-900 dark:border-slate-800 dark:shadow-none"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253"
                />
              </svg>
            </div>
            <div
              class="absolute inset-0 rounded-3xl bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
            ></div>
          </div>

          <div class="space-y-3">
            <span
              class="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
            >
              3 Modul Inti
            </span>
            <h3
              class="text-lg font-bold text-slate-900 dark:text-white leading-tight"
            >
              Edukasi, Budaya, UMKM
            </h3>
            <p
              class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-[260px]"
            >
              Platform terintegrasi yang menyatukan kearifan lokal dengan
              peluang ekonomi kreatif.
            </p>
          </div>
        </div>

        <div
          class="group relative flex flex-col items-center md:items-center text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            class="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white border border-slate-200 shadow-xl transition-transform duration-500 group-hover:scale-110 dark:bg-slate-900 dark:border-slate-800 dark:shadow-none"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
            <div
              class="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
            ></div>
          </div>

          <div class="space-y-3">
            <span
              class="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400"
            >
              Offline-First PWA
            </span>
            <h3
              class="text-lg font-bold text-slate-900 dark:text-white leading-tight"
            >
              Unduh Sekali, Akses Selamanya
            </h3>
            <p
              class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-[260px]"
            >
              Dirancang khusus untuk daerah sulit sinyal agar belajar tidak
              pernah terhenti.
            </p>
          </div>
        </div>

        <div
          class="group relative flex flex-col items-center md:items-end text-center md:text-right"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            class="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white border border-slate-200 shadow-xl transition-transform duration-500 group-hover:rotate-12 dark:bg-slate-900 dark:border-slate-800 dark:shadow-none"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div
              class="absolute inset-0 rounded-3xl bg-amber-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
            ></div>
          </div>

          <div class="space-y-3">
            <span
              class="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
            >
              Fokus Papua
            </span>
            <h3
              class="text-lg font-bold text-slate-900 dark:text-white leading-tight"
            >
              Konteks Timur Indonesia
            </h3>
            <p
              class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-[260px]"
            >
              Bukan solusi generik, tapi materi yang relevan dengan realitas
              sosial budaya lokal.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
