<template>
  <article
    class="relative rounded-xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-2"
  >
    <!-- Overlay saat OFFLINE & modul BELUM tersimpan offline -->
    <div
      v-if="!isOnline && !module.isOfflineAvailable"
      class="absolute inset-0 bg-slate-950/80 flex items-center justify-center text-[11px] text-slate-400 z-10"
    >
      Tidak tersedia di mode offline
    </div>

    <header class="flex items-start justify-between gap-2">
      <div>
        <h3 class="font-semibold text-sm mb-1">
          {{ module.title }}
        </h3>
        <p class="text-xs text-slate-400">
          {{ categoryLabel }} • {{ module.durationMinutes }} menit •
          {{ module.level }}
        </p>
      </div>
      <span
        class="text-[10px] px-2 py-1 rounded-full border"
        :class="
          module.isOfflineAvailable
            ? 'border-emerald-400 text-emerald-300'
            : 'border-slate-600 text-slate-400'
        "
      >
        {{ module.isOfflineAvailable ? "Tersedia Offline" : "Online Saja" }}
      </span>
    </header>

    <p class="text-xs text-slate-300">
      {{ module.shortDescription }}
    </p>

    <footer class="mt-2 flex justify-between items-center">
      <RouterLink
        :to="`/belajar/${module.id}`"
        class="text-xs px-3 py-1 rounded-md bg-emerald-500 text-slate-950 font-medium hover:bg-emerald-400"
        :class="
          !isOnline && !module.isOfflineAvailable
            ? 'pointer-events-none opacity-40'
            : ''
        "
      >
        Buka Modul
      </RouterLink>
      <button
        type="button"
        class="text-[11px] text-slate-300 hover:text-emerald-300"
        :disabled="loading"
        @click="$emit('offline-click')"
      >
        <span v-if="loading">Menyimpan...</span>
        <span v-else>
          {{
            module.isOfflineAvailable
              ? "Perbarui Konten"
              : "Simpan untuk Offline"
          }}
        </span>
      </button>
    </footer>
  </article>
</template>

<script setup lang="ts">
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
      return "Modul";
  }
});
</script>
