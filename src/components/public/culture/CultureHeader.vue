<template>
  <header
    class="relative mt-10 overflow-hidden rounded-[40px] border border-slate-200 bg-white/50 dark:border-slate-800 dark:bg-[#020617]/50 backdrop-blur-sm px-8 py-12 md:py-16 mb-10 shadow-2xl shadow-slate-200/50 dark:shadow-none transition-all duration-500"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-amber-500/10 blur-[100px] animate-pulse"
      ></div>
      <div
        class="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-600/10 blur-[100px]"
      ></div>
      <div
        class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]"
      ></div>
    </div>

    <div
      class="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
    >
      <div class="flex-1 space-y-8 text-center lg:text-left" data-aos="fade-up">
        <div
          class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 px-5 py-2 dark:from-amber-500/10 dark:to-transparent border border-amber-100 dark:border-amber-500/20"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"
            ></span>
          </span>
          <span
            class="text-[11px] font-black uppercase tracking-[0.3em] text-amber-700 dark:text-amber-400"
          >
            Digital Heritage
          </span>
        </div>

        <h1
          class="text-4xl font-Autour md:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white"
        >
          Lestarikan <br />
          <span
            class="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-cyan-400"
          >
            Budaya
          </span>
        </h1>

        <p
          class="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium"
        >
          Arsip digital masa depan untuk tarian dan musik Papua. Simpan kekayaan
          leluhur dalam genggaman,
          <span class="text-slate-800 dark:text-slate-200"
            >akses kapan saja tanpa batas.</span
          >
        </p>

        <div class="flex flex-wrap justify-center lg:justify-start gap-8 pt-4">
          <div class="relative group">
            <p
              class="text-2xl font-black text-slate-900 dark:text-white leading-none"
            >
              100+
            </p>
            <p
              class="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1 group-hover:text-emerald-500 transition-colors"
            >
              Video Tarian
            </p>
          </div>
          <div
            class="w-px h-10 bg-slate-200 dark:bg-slate-800 hidden sm:block"
          ></div>
          <div class="relative group">
            <p
              class="text-2xl font-black text-slate-900 dark:text-white leading-none"
            >
              6
            </p>
            <p
              class="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1 group-hover:text-emerald-500 transition-colors"
            >
              Wilayah Adat
            </p>
          </div>
        </div>
      </div>

      <div
        class="w-full lg:w-[45%] relative"
        data-aos="zoom-out-left"
        data-aos-delay="200"
      >
        <div
          class="absolute -inset-4 border border-dashed border-slate-200 dark:border-slate-800 rounded-[32px] -rotate-3 pointer-events-none"
        ></div>

        <div
          class="group relative z-10 overflow-hidden rounded-[30px] border-[1px] border-white/50 dark:border-slate-700 shadow-2xl transition-all duration-700 hover:scale-[1.02]"
        >
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"
          ></div>

          <img
            src="https://down-id.img.susercontent.com/file/2f4641479e97ca0be9429319561e983e"
            alt="Budaya Papua"
            class="w-full aspect-[4/3] object-cover transform transition-transform duration-1000 group-hover:scale-110"
          />

          <div
            class="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 transform transition-all duration-500 group-hover:-translate-y-2"
          >
            <div class="flex items-center justify-between">
              <div>
                <p
                  class="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1"
                >
                  Instrumen Musik
                </p>
                <p class="text-lg font-bold text-white leading-tight">
                  Tifa: Jantung Papua
                </p>
              </div>
              <div
                class="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div
          class="absolute -right-4 -top-4 z-20 bg-emerald-500 text-white text-[10px] font-black px-4 py-2 rounded-2xl shadow-[0_10px_20px_rgba(16,185,129,0.4)] animate-bounce uppercase tracking-tighter"
        >
          Offline Mode
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Desain modern dengan fokus pada kedalaman visual dan mikro-interaksi.
</script>

<style scoped>
/* Menambahkan smooth scrolling feel */
header {
  transition: transform 0.3s ease-out;
}
</style>
