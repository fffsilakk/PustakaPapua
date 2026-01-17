<script setup lang="ts">
import type { Destination } from "../../../../data/destination";
import { ref } from "vue";

const props = defineProps<{
  destination: Destination;
}>();

const emit = defineEmits<{
  (e: "open-detail", destination: Destination): void;
  (e: "toggle-favorite", id: string): void;
  (e: "open-map", destination: Destination): void;
}>();

const isHovered = ref(false);

const handleClick = () => {
  emit("open-detail", props.destination);
};

const handleFavorite = (event: MouseEvent) => {
  event.stopPropagation();
  emit("toggle-favorite", props.destination.id);
};

const handleMap = (event: MouseEvent) => {
  event.stopPropagation();
  emit("open-map", props.destination);
};
</script>

<template>
  <article
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="group relative flex cursor-pointer flex-col overflow-hidden rounded-[24px] border border-slate-200/60 bg-white p-2 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] dark:border-slate-800 dark:bg-slate-900"
  >
    <div
      class="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-slate-100 dark:bg-slate-800"
    >
      <img
        :src="destination.thumbnail"
        :alt="destination.name"
        class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"
      ></div>

      <div
        class="absolute left-3 top-3 inline-flex items-center rounded-xl bg-white/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/30"
      >
        <span
          class="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"
        />
        {{ destination.category }}
      </div>

      <button
        type="button"
        @click="handleFavorite"
        class="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg shadow-lg transition-all duration-300 hover:scale-110 active:scale-90 dark:bg-slate-900/90"
        :class="destination.isFavorite ? 'text-rose-500' : 'text-slate-400'"
      >
        <span :class="{ 'animate-bounce-short': destination.isFavorite }">
          {{ destination.isFavorite ? "❤️" : "🤍" }}
        </span>
      </button>
    </div>

    <div class="flex flex-1 flex-col px-3 pb-3 pt-4">
      <div class="mb-1 flex items-center gap-2">
        <span
          class="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400"
        >
          {{ destination.location }}
        </span>
      </div>

      <h3
        class="text-lg font-bold leading-tight text-slate-900 line-clamp-1 transition-colors group-hover:text-emerald-600 dark:text-slate-50 dark:group-hover:text-emerald-400"
      >
        {{ destination.name }}
      </h3>

      <p
        class="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400"
      >
        {{ destination.shortDescription }}
      </p>

      <div
        class="mt-auto pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/50"
      >
        <!-- <div class="flex items-center gap-1.5">
          <div
            class="flex h-7 items-center rounded-lg bg-emerald-50 px-2 text-[11px] font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
          >
            🗓 {{ destination.bestTimeToVisit }}
          </div>
        </div> -->

        <button
          @click="handleMap"
          type="button"
          class="group/btn flex items-center justify-center rounded-full font-bold transition-all text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400"
        >
          <span class="text-xs group-hover/btn:scale-110 transition-transform"
            >Lihat Maps</span
          >
        </button>

        <button
          type="button"
          @click.stop="handleClick"
          class="flex items-center text-xs font-bold text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
        >
          Detail
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.animate-bounce-short {
  animation: bounce-short 0.5s ease-in-out;
}

@keyframes bounce-short {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
}

/* Custom shadow untuk dark mode agar lebih smooth */
.dark .group:hover {
  box-shadow: 0 20px 50px -12px rgba(16, 185, 129, 0.25);
}
</style>
