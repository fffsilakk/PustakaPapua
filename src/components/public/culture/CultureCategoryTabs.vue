<template>
  <div class="relative py-4">
    <div class="flex items-center gap-2 mb-3 px-1">
      <span
        class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500"
      >
        Kategori Budaya
      </span>
    </div>

    <div class="flex flex-wrap gap-3">
      <button
        v-for="item in items"
        :key="item.value"
        type="button"
        @click="$emit('update:modelValue', item.value)"
        class="relative flex cursor-pointer items-center gap-2 px-5 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 border group"
        :class="
          item.value === modelValue
            ? 'border-emerald-500 bg-emerald-500 text-white shadow-lg shadow-emerald-200 dark:shadow-none'
            : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:border-emerald-500'
        "
      >
        <span
          v-if="item.icon"
          class="text-sm group-hover:scale-125 transition-transform duration-300"
        >
          {{ item.icon }}
        </span>

        {{ item.label }}

        <span
          v-if="item.value === modelValue"
          class="absolute -top-1 -right-1 flex h-3 w-3"
        >
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white dark:border-slate-900"
          ></span>
        </span>
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

const items: { value: FilterValue; label: string; icon: string }[] = [
  { value: "all", label: "Semua", icon: "" },
  { value: "tarian", label: "Tarian", icon: "" },
  { value: "musik", label: "Musik", icon: "" },
  { value: "bahasa", label: "Bahasa", icon: "" },
  { value: "cerita", label: "Cerita Rakyat", icon: "" },
  { value: "favorite", label: "Favorit", icon: "⭐" },
];

defineEmits<{
  (e: "update:modelValue", value: FilterValue): void;
}>();
</script>

<style scoped>
/* Memberikan efek bouncy saat tombol diklik */
button:active {
  transform: scale(0.95);
}
</style>
