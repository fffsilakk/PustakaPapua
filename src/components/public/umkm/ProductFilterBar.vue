<template>
  <div class="mb-8 overflow-x-auto no-scrollbar">
    <div
      class="inline-flex bg-slate-100 dark:bg-slate-800/50 p-1.5 rounded-[20px] border border-slate-200 dark:border-slate-800"
    >
      <button
        v-for="item in items"
        :key="item.value"
        type="button"
        @click="$emit('update:modelValue', item.value)"
        class="flex items-center gap-2 px-6 py-2.5 rounded-[16px] text-[11px] font-black uppercase tracking-widest transition-all duration-300"
        :class="
          item.value === modelValue
            ? 'bg-white dark:bg-slate-700 text-orange-600 dark:text-orange-400 shadow-sm'
            : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
        "
      >
        <span
          v-if="item.value === modelValue"
          class="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
        ></span>
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
type FilterValue = "all" | "makanan" | "kerajinan" | "kopi";

defineProps<{
  modelValue: FilterValue;
}>();

const items: { value: FilterValue; label: string }[] = [
  { value: "all", label: "Semua Produk" },
  { value: "makanan", label: "Makanan" },
  { value: "kerajinan", label: "Kerajinan" },
  { value: "kopi", label: "Kopi Papua" },
];

defineEmits<{
  (e: "update:modelValue", value: FilterValue): void;
}>();
</script>

<style scoped>
/* Menghilangkan scrollbar tapi tetap bisa di-scroll secara horizontal di HP */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
