<script setup lang="ts">
interface Props {
  title?: string;
  message?: string;
}

withDefaults(defineProps<Props>(), {
  title: "Modul Sedang Dikembangkan",
  message:
    "Kami sedang mengumpulkan referensi terbaik dan memverifikasi data budaya agar informasi yang Anda terima akurat dan mendalam.",
});
</script>

<template>
  <div
    class="relative mt-5 overflow-hidden rounded-[2.5rem] border-2 border-dashed border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900/50 sm:p-12"
  >
    <div
      class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-50 dark:bg-amber-900/10"
    ></div>
    <div
      class="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-indigo-50 dark:bg-indigo-900/10"
    ></div>

    <div class="relative z-10 flex flex-col items-center">
      <div
        class="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-100 text-4xl shadow-inner dark:bg-amber-900/30"
      >
        <span class="animate-bounce">🚧</span>
      </div>

      <h2 class="mb-3 text-2xl font-black text-slate-900 dark:text-white">
        {{ title }}
      </h2>
      <p
        class="mx-auto max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400"
      >
        {{ message }}
      </p>

      <div
        class="mt-8 flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-amber-600"
      >
        <span class="flex h-2 w-2">
          <span
            class="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-amber-400 opacity-75"
          ></span>
          <span
            class="relative inline-flex h-2 w-2 rounded-full bg-amber-500"
          ></span>
        </span>
        Sedang Proses Riset & Penulisan
      </div>

      <slot name="action"></slot>
    </div>
  </div>
</template>

<style scoped>
/* Tambahan animasi smooth */
.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
