<template>
  <section
    class="mb-5 sm:mb-6 border-b border-slate-200/70 pb-3 sm:pb-4 dark:border-slate-800/70"
  >
    <div
      class="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <!-- Kategori filter -->
      <div class="flex-1 min-w-0">
        <ModuleFilterBar v-model="innerCategory" />
      </div>

      <!-- Info jumlah modul -->
      <div
        class="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-3 py-2 text-[11px] sm:text-xs text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300"
      >
        <div
          class="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 text-base dark:bg-emerald-500/20 dark:text-emerald-300"
        >
          📚
        </div>
        <div class="leading-tight">
          <p class="font-semibold text-slate-900 dark:text-slate-50">
            {{ count }} modul
          </p>
          <p class="text-[10px] text-slate-900 dark:text-slate-400">
            Kategori:
            <span class="text-emerald-700 font-medium dark:text-emerald-300">
              {{ categoryText }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ModuleFilterBar from "./ModuleFilterBar.vue";

type FilterValue = "all" | "coding" | "agrikultur" | "bahasa";

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
