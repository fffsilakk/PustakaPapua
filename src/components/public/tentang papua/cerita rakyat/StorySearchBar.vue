<template>
  <div
    class="mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
  >
    <!-- Text Info -->
    <div class="space-y-1">
      <p class="text-xs font-semibold text-slate-800 dark:text-slate-200">
        Cari Cerita Rakyat Papua
      </p>
      <p class="text-[11px] text-slate-500 dark:text-slate-400">
        Ketik judul atau daerah, hasil akan muncul otomatis.
      </p>
    </div>

    <!-- Input -->
    <div
      class="flex w-full items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 text-xs text-slate-700 dark:text-slate-200 sm:w-72"
    >
      <span class="text-slate-400 dark:text-slate-500">
        <FlSearchSettings class="size-5" />
      </span>

      <input
        v-model="model"
        type="text"
        placeholder="Cari judul atau wilayah..."
        class="w-full bg-transparent text-[11px] outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
      />

      <button
        v-if="model"
        type="button"
        class="text-[10px] text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
        @click="model = ''"
      >
        Bersihkan
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>({ default: "" });
import { FlSearchSettings } from "@kalimahapps/vue-icons";
</script>
