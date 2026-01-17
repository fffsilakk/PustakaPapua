<template>
  <article
    class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/10"
  >
    <!-- Cover -->
    <div class="relative h-40 overflow-hidden bg-slate-100 dark:bg-slate-800">
      <img
        v-if="story.coverUrl"
        :src="story.coverUrl"
        :alt="story.title"
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent dark:from-slate-950/80 dark:via-slate-950/20"
      ></div>

      <!-- Region -->
      <div
        class="absolute bottom-3 left-3 rounded-full bg-white/80 dark:bg-black/60 px-3 py-1 text-[10px] text-slate-700 dark:text-slate-100 backdrop-blur"
      >
        📍 {{ story.region }}
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-1 flex-col p-4">
      <header class="mb-2">
        <p
          class="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-300"
        >
          {{ categoryLabel }}
        </p>

        <h3
          class="mt-1 line-clamp-2 text-sm font-semibold text-slate-900 dark:text-slate-50 transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-300"
        >
          {{ story.title }}
        </h3>
      </header>

      <p
        class="mb-4 line-clamp-3 text-[11px] leading-relaxed text-slate-600 dark:text-slate-300"
      >
        {{ story.shortDescription }}
      </p>

      <!-- Action -->
      <div class="mt-auto flex items-center justify-between text-[11px]">
        <RouterLink :to="`/ceritaRakyat/${story.id}`">
          <button
            type="button"
            class="rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1 text-[10px] font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-300"
          >
            Baca Cerita
          </button>
        </RouterLink>
      </div>
    </div>
  </article>
</template>
<script setup lang="ts">
import { computed } from "vue";
import type { StoryItem } from "../../../../data/stories";

const props = defineProps<{
  story: StoryItem;
}>();

defineEmits<{
  "open-story": [string];
}>();

const categoryLabel = computed(() => {
  const map: Record<StoryItem["category"], string> = {
    "cerita-rakyat": "Cerita Rakyat",
    legenda: "Legenda",
    mitos: "Mitos",
  };
  return map[props.story.category];
});
</script>
