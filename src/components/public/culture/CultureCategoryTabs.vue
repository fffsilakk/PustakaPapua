<template>
  <div class="relative py-6">
    <div class="flex items-center gap-3 mb-5 px-1">
      <div class="h-[1px] w-6 bg-emerald-500/50"></div>
      <span
        class="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500"
      >
        Filter Kategori
      </span>
    </div>

    <div class="flex flex-wrap gap-2.5">
      <button
        v-for="item in items"
        :key="item.value"
        type="button"
        @click="$emit('update:modelValue', item.value)"
        class="relative flex cursor-pointer items-center gap-2.5 px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 border active:scale-95 group"
        :class="
          item.value === modelValue
            ? 'border-emerald-600 bg-emerald-600 text-white shadow-md shadow-emerald-500/20 dark:border-emerald-500 dark:bg-emerald-500'
            : 'border-slate-200 bg-white text-slate-500 hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-400 dark:hover:border-emerald-500'
        "
      >
        <span
          v-if="item.icon"
          class="text-xs transition-transform duration-300 group-hover:scale-125"
          :class="item.value === modelValue ? 'text-white' : 'text-amber-500'"
        >
          {{ item.icon }}
        </span>

        {{ item.label }}

        <span
          v-if="item.value === modelValue"
          class="ml-1.5 h-1.5 w-1.5 rounded-full bg-white/80"
        ></span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
type FilterValue =
  | "all"
  | "tarian"
  | "musik"
  | "bahasa"
  | "cerita"
  | "favorite";

defineProps<{
  modelValue: FilterValue;
}>();

const items: { value: FilterValue; label: string; icon?: string }[] = [
  { value: "all", label: "Semua" },
  { value: "tarian", label: "Tarian" },
  { value: "musik", label: "Musik" },
  { value: "bahasa", label: "Bahasa" },
  { value: "cerita", label: "Cerita Rakyat" },
  { value: "favorite", label: "Favorit", icon: "⭐" },
];

defineEmits<{
  (e: "update:modelValue", value: FilterValue): void;
}>();
</script>

<style scoped>
/* Transisi halus untuk semua properti */
button {
  backface-visibility: hidden;
  will-change: transform, background-color, border-color;
}
</style>
