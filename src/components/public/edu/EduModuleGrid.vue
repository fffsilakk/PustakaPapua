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
