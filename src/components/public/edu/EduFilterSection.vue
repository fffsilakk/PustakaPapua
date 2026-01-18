<template>
  <section
    class="mb-6 border-b border-slate-200/70 pb-4 dark:border-zinc-800/70"
  >
    <div
      class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      data-aos="fade-up"
    >
      <div class="flex-1 min-w-0">
        <ModuleFilterBar v-model="innerCategory" />
      </div>

      <div
        class="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80"
      >
        <div
          class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
        >
          📚
        </div>
        <div class="leading-tight text-xs">
          <p class="font-bold text-slate-900 dark:text-white">
            {{ count }} Modul
          </p>
          <p class="text-[10px] text-slate-500 dark:text-zinc-400">
            Kategori:
            <span class="text-emerald-600 dark:text-emerald-400 font-medium">{{
              categoryText
            }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ModuleFilterBar from "./ModuleFilterBar.vue";
import type { FilterValue } from "../../../data/eduModules";

const props = defineProps<{
  category: FilterValue;
  count: number;
  categoryText: string;
}>();

const emit = defineEmits<{
  (e: "update:category", value: FilterValue): void;
}>();

const innerCategory = computed<FilterValue>({
  get: () => props.category,
  set: (val) => emit("update:category", val),
});
</script>
