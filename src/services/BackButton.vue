<script setup lang="ts">
import { useRouter } from "vue-router";

const props = defineProps<{
  to?: string; // fallback route
  label?: string; // teks tombol
  size?: "sm" | "md"; // ukuran
}>();

const router = useRouter();

const handleClick = () => {
  if (window.history.length > 1) {
    router.go(-1);
  } else {
    router.push(props.to ?? "/");
  }
};

const sizeClass =
  props.size === "sm" ? "h-8 px-3 text-xs" : "h-9 px-3.5 text-sm";
</script>

<template>
  <button
    type="button"
    @click="handleClick"
    :class="[
      'inline-flex items-center cursor-pointer gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98] dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800',
      sizeClass,
    ]"
  >
    <!-- ikon panah -->
    <span class="inline-flex h-4 w-4 items-center justify-center">
      <svg
        viewBox="0 0 20 20"
        class="h-4 w-4"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M11.5 5.5L7 10l4.5 4.5" />
      </svg>
    </span>
    <span>{{ label ?? "Kembali" }}</span>
  </button>
</template>
