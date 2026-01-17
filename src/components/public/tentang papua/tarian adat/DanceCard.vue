<script setup lang="ts">
import type { Dance } from "../../../../data/dance";

const props = defineProps<{
  dance: Dance;
}>();

const emit = defineEmits<{
  (e: "open-detail", dance: Dance): void;
  (e: "toggle-favorite", id: string): void;
}>();

const handleClick = () => {
  emit("open-detail", props.dance);
};

const handleFavorite = (event: MouseEvent) => {
  event.stopPropagation();
  emit("toggle-favorite", props.dance.id);
};
</script>

<template>
  <article
    @click="handleClick"
    class="group relative flex cursor-pointer flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-amber-500/50"
  >
    <div
      class="relative h-48 w-full overflow-hidden rounded-[1.7rem] bg-slate-100 dark:bg-slate-800 sm:h-52"
    >
      <img
        :src="dance.thumbnail"
        :alt="dance.name"
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ></div>

      <div
        class="absolute left-3 top-3 inline-flex items-center rounded-xl bg-white/20 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md border border-white/20"
      >
        {{ dance.category }}
      </div>

      <button
        type="button"
        @click="handleFavorite"
        class="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 shadow-sm transition-all duration-300 hover:scale-110 dark:bg-slate-900/90"
        :class="
          dance.isFavorite
            ? 'text-rose-500'
            : 'text-slate-400 hover:text-rose-500'
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :fill="dance.isFavorite ? 'currentColor' : 'none'"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="h-5 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
    </div>

    <div class="flex flex-1 flex-col px-4 pb-5 pt-4">
      <div class="mb-2">
        <p
          class="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400"
        >
          {{ dance.region }}
        </p>
        <h3
          class="mt-1 text-lg font-bold leading-tight text-slate-900 line-clamp-1 dark:text-white"
        >
          {{ dance.name }}
        </h3>
      </div>

      <p
        class="mb-4 line-clamp-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400"
      >
        {{ dance.shortDescription }}
      </p>

      <div
        class="mt-auto flex items-center justify-between border-t border-slate-50 pt-4 dark:border-slate-800"
      >
        <div class="flex gap-2">
          <div
            v-if="dance.attributes.jumlahPenari"
            class="flex items-center gap-1 rounded-lg bg-slate-50 px-2 py-1 dark:bg-slate-800"
          >
            <span class="text-[10px]">👥</span>
            <span
              class="text-[10px] font-bold text-slate-600 dark:text-slate-300"
              >{{ dance.attributes.jumlahPenari }}</span
            >
          </div>
        </div>

        <span
          class="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-amber-600 transition-colors"
        >
          Detail
          <span
            class="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >→</span
          >
        </span>
      </div>
    </div>
  </article>
</template>

<style scoped>
/* Menghilangkan blue highlight pada mobile */
article {
  -webkit-tap-highlight-color: transparent;
}
</style>
