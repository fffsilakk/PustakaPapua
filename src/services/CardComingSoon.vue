<template>
  <article
    class="group relative rounded-[28px] border-2 border-dashed border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/20 overflow-hidden flex flex-col h-full min-h-[380px] transition-all duration-500 hover:border-emerald-500/50"
  >
    <div
      class="relative h-44 bg-slate-100 dark:bg-slate-800/40 flex items-center justify-center overflow-hidden"
    >
      <div
        class="absolute inset-0 animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 dark:via-slate-700/20 to-transparent"
      ></div>

      <div
        class="relative z-10 flex flex-col items-center gap-2 opacity-30 group-hover:opacity-100 transition-all duration-500"
      >
        <span class="text-4xl grayscale group-hover:grayscale-0 transition-all"
          >🎁</span
        >
      </div>
    </div>

    <div
      class="p-5 flex-1 flex flex-col items-center text-center justify-center"
    >
      <div
        class="inline-flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 px-3 py-1 mb-4"
      >
        <span
          class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"
        ></span>
        <span
          class="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400"
        >
          Karya Baru
        </span>
      </div>

      <h3
        class="font-black text-sm text-slate-400 dark:text-slate-600 tracking-tight uppercase"
      >
        Produk Otentik <br />
        Segera Hadir
      </h3>

      <p
        class="mt-3 text-[10px] text-slate-400 dark:text-slate-500 font-medium leading-relaxed max-w-[180px]"
      >
        Sedang dalam proses kurasi langsung dari pengrajin lokal Papua.
      </p>

      <div class="mt-auto w-full pt-6">
        <div class="flex gap-2">
          <div
            class="h-9 flex-1 rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-center justify-center"
          >
            <div
              class="h-1 w-8 bg-slate-200 dark:bg-slate-700 rounded-full"
            ></div>
          </div>
          <div
            class="h-9 flex-1 rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-center justify-center"
          >
            <div
              class="h-1 w-8 bg-slate-200 dark:bg-slate-700 rounded-full"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute top-3 right-3 rotate-12 bg-amber-500 text-white text-[8px] font-black px-2.5 py-1 rounded-lg shadow-lg uppercase tracking-tighter"
    >
      Coming Soon
    </div>
  </article>
</template>

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}
</style>
