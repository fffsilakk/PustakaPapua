<template>
  <div class="flex flex-wrap gap-2 mb-4 text-[11px] sm:text-xs">
    <button
      v-for="item in items"
      :key="item.value"
      type="button"
      class="px-4 py-1.5 rounded-full border transition-all duration-300 font-medium active:scale-95"
      :class="
        item.value === modelValue
          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-emerald-400 dark:hover:border-emerald-500/50'
      "
      @click="$emit('update:modelValue', item.value)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
// 1. HAPUS 'type FilterValue' manual dan IMPORT dari pusat data
import type { FilterValue } from "../../../data/eduModules";

// 2. Gunakan tipe dari import untuk props
defineProps<{
  modelValue: FilterValue;
}>();

// 3. Tambahkan "Budaya" ke dalam daftar menu
const items: { value: FilterValue; label: string }[] = [
  { value: "all", label: "Semua" },
  { value: "coding", label: "Coding" },
  { value: "agrikultur", label: "Agrikultur" },
  { label: "Bahasa Inggris", value: "bahasa" },
  { label: "Budaya", value: "budaya" }, // Tambahkan ini
];

// 4. Gunakan tipe dari import untuk emits
defineEmits<{
  (e: "update:modelValue", value: FilterValue): void;
}>();
</script>
