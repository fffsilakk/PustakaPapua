<template>
  <div class="flex flex-wrap gap-2 mb-4 text-xs">
    <button
      v-for="item in items"
      :key="item.value"
      type="button"
      class="px-3 py-1 rounded-full border"
      :class="
        item.value === modelValue
          ? 'border-emerald-400 bg-emerald-500/10 text-emerald-300'
          : 'border-slate-700 text-slate-300 hover:border-emerald-400'
      "
      @click="$emit('update:modelValue', item.value)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
type FilterValue = "all" | "tarian" | "musik" | "bahasa" | "cerita";

defineProps<{
  modelValue: FilterValue;
}>();

const items: { value: FilterValue; label: string }[] = [
  { value: "all", label: "Semua" },
  { value: "tarian", label: "Tarian" },
  { value: "musik", label: "Musik" },
  { value: "bahasa", label: "Bahasa" },
  { value: "cerita", label: "Cerita Rakyat" },
];

defineEmits<{
  (e: "update:modelValue", value: FilterValue): void;
}>();
</script>
