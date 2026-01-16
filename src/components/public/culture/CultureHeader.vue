<template>
  <header
    class="relative mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#020617] px-8 py-10 md:py-12 mb-10 shadow-xl shadow-slate-200/40 dark:shadow-none"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-amber-500/10 blur-[80px]"
      ></div>
      <div
        class="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-600/10 blur-[80px]"
      ></div>
    </div>

    <div class="relative flex flex-col lg:flex-row items-center gap-10">
      <div
        class="flex-1 space-y-6 text-center lg:text-left"
        data-aos="fade-right"
      >
        <div
          class="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 dark:bg-amber-500/10"
        >
          <span
            class="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"
          ></span>
          <span
            class="text-[10px] font-black uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400"
          >
            Digital Heritage
          </span>
        </div>

        <h1
          class="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-slate-900 dark:text-white"
        >
          Lestarikan Budaya <br />
          <span class="text-emerald-600 dark:text-emerald-400"
            >Melampaui Waktu.</span
          >
        </h1>

        <p
          class="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0"
        >
          Platform arsip digital untuk tarian dan musik Papua. Akses koleksi
          lengkap di mana saja, bahkan tanpa koneksi internet.
        </p>

        <div class="flex flex-wrap justify-center lg:justify-start gap-6 pt-2">
          <div class="flex items-center gap-2">
            <!-- <span class="text-lg">🎬</span> -->
            <div class="text-left">
              <p
                class="text-xs font-black text-slate-900 dark:text-white leading-none"
              >
                100+ Video
              </p>
              <p class="text-[10px] text-slate-400 uppercase tracking-tighter">
                Tarian Adat
              </p>
            </div>
          </div>
          <div
            class="flex items-center gap-2 border-l border-slate-200 dark:border-slate-800 pl-6"
          >
            <!-- <span class="text-lg">🌍</span> -->
            <div class="text-left">
              <p
                class="text-xs font-black text-slate-900 dark:text-white leading-none"
              >
                6 Wilayah
              </p>
              <p class="text-[10px] text-slate-400 uppercase tracking-tighter">
                Tanah Papua
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-[40%] relative" data-aos="zoom-in">
        <div
          class="relative z-10 overflow-hidden rounded-[24px] border-[6px] border-slate-50 dark:border-slate-800 shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500"
        >
          <img
            src="https://down-id.img.susercontent.com/file/2f4641479e97ca0be9429319561e983e"
            alt="Budaya Papua"
            class="w-full aspect-[4/3] object-cover"
          />
          <div
            class="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20"
          >
            <p
              class="text-xs font-bold text-slate-900 dark:text-white leading-tight"
            >
              Tifa: Irama Jantung Papua
            </p>
          </div>
        </div>

        <div
          class="absolute -right-2 -top-2 z-20 bg-emerald-500 text-white text-[9px] font-black px-3 py-1.5 rounded-lg shadow-lg rotate-12 uppercase tracking-tighter"
        >
          Offline Mode
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Desain ringkas, responsif, dan hemat ruang.
</script>
