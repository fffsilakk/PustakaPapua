<template>
  <section>
    <!-- Empty state -->
    <div
      v-if="modules.length === 0"
      class="flex flex-col items-center justify-center border border-dashed border-slate-700/70 rounded-2xl py-10 px-4 text-center bg-slate-950/40"
    >
      <div
        class="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-2xl mb-3"
      >
        🔍
      </div>
      <p class="text-sm text-slate-200 mb-1">
        Belum ada modul untuk filter ini.
      </p>
      <p class="text-[11px] text-slate-400 max-w-sm">
        Coba pilih kategori lain atau tampilkan semua modul untuk melihat materi
        yang tersedia.
      </p>
    </div>

    <!-- Grid modul -->
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
    >
      <ModuleCard
        v-for="mod in modules"
        :key="mod.id"
        :module="mod"
        :loading="loadingId === mod.id"
        @offline-click="$emit('offline-click', mod.id)"
      />
      <article
        class="group relative overflow-hidden rounded-2xl border p-5 flex flex-col gap-4 min-h-[220px] transition-all duration-500 /* Light Mode */ bg-slate-50/50 border-dashed border-slate-300 /* Dark Mode */ dark:bg-slate-900/20 dark:border-slate-800 dark:backdrop-blur-sm"
      >
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            class="absolute -top-10 -right-10 size-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors duration-500"
          ></div>
        </div>

        <header class="relative z-10 flex items-start justify-between gap-3">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-3">
              <div
                class="h-5 w-20 rounded bg-slate-200 dark:bg-slate-800 animate-pulse flex items-center justify-center"
              >
                <div
                  class="h-1.5 w-10 bg-slate-300 dark:bg-slate-700 rounded-full"
                ></div>
              </div>
            </div>
            <div class="space-y-2">
              <div
                class="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"
              ></div>
              <div
                class="h-4 w-1/2 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"
              ></div>
            </div>
          </div>

          <div class="shrink-0">
            <div
              class="flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-slate-300 dark:border-slate-700 text-slate-400"
            >
              <span class="text-sm">🔒</span>
            </div>
          </div>
        </header>

        <div class="relative z-10 space-y-2">
          <div
            class="h-2 w-full bg-slate-100 dark:bg-slate-800/50 rounded animate-pulse"
          ></div>
          <div
            class="h-2 w-full bg-slate-100 dark:bg-slate-800/50 rounded animate-pulse"
          ></div>

          <div class="flex items-center gap-3 mt-4 pt-2">
            <div class="h-5 w-16 bg-slate-100 dark:bg-white/5 rounded"></div>
            <div class="h-5 w-16 bg-slate-100 dark:bg-white/5 rounded"></div>
          </div>
        </div>

        <footer
          class="relative z-10 mt-auto pt-4 flex items-center justify-between border-t border-dashed border-slate-200 dark:border-slate-800/50"
        >
          <div
            class="h-8 w-28 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center"
          >
            <span
              class="text-[9px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500"
              >Locked</span
            >
          </div>

          <span
            class="text-[10px] font-black uppercase tracking-tighter text-emerald-600 dark:text-emerald-500 animate-pulse"
          >
            Coming Soon
          </span>
        </footer>

        <div
          class="absolute inset-0 z-20 flex items-center justify-center bg-white/40 dark:bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[1px]"
        >
          <div
            class="bg-white dark:bg-slate-800 px-4 py-2 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 transform -rotate-2"
          >
            <p
              class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-800 dark:text-white"
            >
              Modul Baru Sedang Disiapkan
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import ModuleCard from "./ModuleCard.vue";
import type { EduModule } from "../../../data/eduModules";

const props = defineProps<{
  modules: EduModule[];
  loadingId: string | null;
}>();

defineEmits<{
  (e: "offline-click", id: string): void;
}>();
</script>

<style scoped>
/* Shimmer effect if needed */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
