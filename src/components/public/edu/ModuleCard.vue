<template>
  <article
    data-aos="fade-up"
    class="group relative overflow-hidden rounded-2xl border transition-all duration-300 /* Light Mode */ bg-white border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-200 /* Dark Mode */ dark:bg-slate-900/40 dark:border-slate-700/50 dark:backdrop-blur-md dark:hover:border-emerald-500/50 dark:hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)] p-5 flex flex-col gap-3 hover:-translate-y-2"
  >
    <div
      class="absolute -inset-px bg-gradient-to-r from-emerald-500/10 to-sky-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-emerald-500/20 dark:to-sky-500/20"
    />

    <div
      v-if="!isOnline && !module.isOfflineAvailable"
      class="absolute inset-0 z-20 flex flex-col items-center justify-center backdrop-blur-sm bg-white/90 text-slate-600 dark:bg-slate-950/90 dark:text-slate-300"
    >
      <span class="mb-2 text-xl text-slate-400">🚫</span>
      <p class="text-[12px] font-medium">Tidak tersedia offline</p>
    </div>

    <header class="relative z-10 flex items-start justify-between gap-3">
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-2">
          <span
            class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20"
          >
            {{ categoryLabel }}
          </span>
        </div>
        <h3
          class="font-bold text-base leading-tight transition-colors text-slate-800 group-hover:text-emerald-600 dark:text-slate-100 dark:group-hover:text-emerald-400"
        >
          {{ module.title }}
        </h3>
      </div>

      <div class="shrink-0">
        <div
          v-if="module.isOfflineAvailable"
          class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
        </div>
        <div
          v-else
          class="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" x2="12.01" y1="20" y2="20" />
          </svg>
        </div>
      </div>
    </header>

    <div class="relative z-10 flex flex-col gap-3">
      <p
        class="text-xs leading-relaxed line-clamp-2 text-slate-600 dark:text-slate-400"
      >
        {{ module.shortDescription }}
      </p>

      <div
        class="flex items-center gap-3 text-[11px] font-medium text-slate-500 dark:text-slate-500"
      >
        <span
          class="flex items-center gap-1 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded"
        >
          🕒 {{ module.durationMinutes }} mnt
        </span>
        <span
          class="flex items-center gap-1 capitalize bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded"
        >
          📊 {{ module.level }}
        </span>
      </div>
    </div>

    <footer
      class="relative z-10 mt-auto pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/50"
    >
      <RouterLink
        :to="`/belajar/${module.id}`"
        class="inline-flex items-center justify-center gap-2 text-xs px-4 py-2 rounded-lg font-bold transition-all active:scale-95 bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
        :class="{
          'opacity-40 pointer-events-none':
            !isOnline && !module.isOfflineAvailable,
        }"
      >
        Mulai Belajar
      </RouterLink>

      <button
        type="button"
        class="text-[11px] font-semibold transition-colors flex items-center gap-1 text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
        :disabled="loading"
        @click="$emit('offline-click')"
      >
        <span v-if="loading" class="animate-spin text-sm">↻</span>
        <span>{{ module.isOfflineAvailable ? "Update" : "Simpan" }}</span>
      </button>
    </footer>
  </article>
</template>
<script setup lang="ts">
// ... Script tetap sama seperti sebelumnya
import { computed } from "vue";
import { RouterLink } from "vue-router";
import type { EduModule } from "../../../data/eduModules";
import { useOfflineStore } from "../../../stores/offlineStore";

const props = defineProps<{
  module: EduModule;
  loading?: boolean;
}>();

const offlineStore = useOfflineStore();
const isOnline = computed(() => offlineStore.isOnline);

const categoryLabel = computed(() => {
  switch (props.module.category) {
    case "coding":
      return "Coding Dasar";
    case "agrikultur":
      return "Agrikultur";
    case "bahasa":
      return "Bahasa Inggris";
    default:
      return "Modul Umum";
  }
});
</script>
