<script setup lang="ts">
import type { House } from "../../../../data/house";

const props = defineProps<{
  house: House;
}>();

const emit = defineEmits<{
  (e: "open-detail", house: House): void;
  (e: "toggle-favorite", id: string): void;
}>();

const handleClick = () => {
  emit("open-detail", props.house);
};

const handleFavorite = (event: MouseEvent) => {
  event.stopPropagation();
  emit("toggle-favorite", props.house.id);
};
</script>

<template>
  <article
    @click="handleClick"
    class="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-amber-400/80 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/80"
  >
    <!-- Gambar -->
    <div
      class="relative h-40 w-full overflow-hidden bg-slate-200 dark:bg-slate-800 sm:h-44"
    >
      <img
        :src="house.thumbnail"
        :alt="house.name"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <!-- Badge kategori -->
      <div
        class="absolute left-3 top-3 inline-flex items-center rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-amber-100 backdrop-blur-sm dark:bg-slate-950/80"
      >
        <span class="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {{ house.category }}
      </div>

      <!-- Tombol favorit -->
      <button
        type="button"
        @click="handleFavorite"
        class="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sm text-amber-500 shadow-sm transition hover:bg-amber-500 hover:text-white dark:bg-slate-900/90 dark:text-amber-300 dark:hover:bg-amber-500"
      >
        <span v-if="house.isFavorite">★</span>
        <span v-else>☆</span>
      </button>
    </div>

    <!-- Konten -->
    <div class="flex flex-1 flex-col px-4 pb-4 pt-3">
      <header class="flex items-start justify-between gap-2">
        <h3
          class="text-base font-semibold text-slate-900 line-clamp-2 dark:text-slate-50"
        >
          {{ house.name }}
        </h3>
      </header>

      <p
        class="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-amber-700/80 dark:text-amber-300/90"
      >
        {{ house.region }} · rumah adat
      </p>

      <p class="mt-2 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">
        {{ house.shortDescription }}
      </p>

      <div
        class="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400"
      >
        <div class="flex flex-wrap gap-1.5">
          <!-- <span
            class="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-200"
          >
            🧱 {{ house.materials }}
          </span> -->
        </div>

        <button
          type="button"
          @click.stop="handleClick"
          class="inline-flex items-center text-[11px] font-semibold text-amber-700 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200"
        >
          Lihat detail
          <span class="ml-1 transition-transform group-hover:translate-x-0.5"
            >→</span
          >
        </button>
      </div>
    </div>
  </article>
</template>
