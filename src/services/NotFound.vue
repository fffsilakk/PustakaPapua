<template>
  <section
    class="relative min-h-[90vh] flex items-center justify-center bg-white transition-colors duration-500 dark:bg-slate-950 overflow-hidden"
  >
    <div
      class="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px] dark:bg-emerald-500/10"
      ></div>
      <div
        class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-20 mix-blend-overlay"
      ></div>
    </div>

    <div class="relative mx-auto max-w-2xl px-6 py-20 text-center">
      <div class="relative inline-block mb-8">
        <h1
          class="text-[12rem] font-black leading-none tracking-tighter text-slate-200 dark:text-slate-800/50 select-none"
        >
          404
        </h1>
        <div class="absolute inset-0 flex items-center justify-center">
          <div
            class="h-24 w-24 rounded-3xl bg-emerald-500 flex items-center justify-center shadow-2xl shadow-emerald-500/40 rotate-12 animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h2
          class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >
          Waduh, Halamannya
          <span class="text-emerald-500 font-mono">Hilang!</span>
        </h2>
        <p
          class="mx-auto max-w-md text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          Mungkin karena halamannya yang salah, atau halamannya memang belum
          sempat saya buat Maaf yah, atas ketidaknyamanannya.
        </p>
      </div>

      <div
        class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button
          @click="goBack"
          class="inline-flex cursor-pointer w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-emerald-600 active:scale-95 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400 shadow-xl shadow-emerald-500/10"
        >
          <BxArrowBack class="h-4 w-4" />
          Kembali
        </button>

        <RouterLink
          to="/kontak"
          class="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          Lapor Bug / Isu
        </RouterLink>
      </div>

      <div class="mt-10 pt-8 border-t border-slate-100 dark:border-slate-900">
        <p
          class="text-[11px] font-mono text-slate-400 uppercase tracking-widest leading-loose"
        >
          Error Log: 404_PAGE_NOT_FOUND <br />
          Status: Sedang dicari sambil minum kopi ☕
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BxArrowBack } from "@kalimahapps/vue-icons";
const goBack = () => {
  window.history.back();
};
</script>
