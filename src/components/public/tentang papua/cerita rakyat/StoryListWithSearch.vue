<template>
  <section
    class="mx-auto max-w-6xl px-4 py-10 text-slate-800 dark:text-slate-100"
  >
    <!-- Header -->
    <div class="mb-8 text-center">
      <h1
        class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl"
      >
        Cerita Rakyat Papua
      </h1>
      <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Kisah, legenda, dan warisan budaya dari Tanah Papua
      </p>
    </div>

    <!-- Search bar -->
    <div class="mb-4">
      <StorySearchBar v-model="query" />
    </div>

    <!-- Info hasil -->
    <div
      class="mb-5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400"
    >
      <p>
        Menampilkan
        <span class="font-semibold text-emerald-600 dark:text-emerald-400">
          {{ filteredStories.length }}
        </span>
        cerita
      </p>

      <p v-if="query">
        Pencarian:
        <span class="italic text-slate-700 dark:text-slate-200">
          "{{ query }}"
        </span>
      </p>
    </div>

    <!-- Grid cards -->
    <div
      v-if="filteredStories.length"
      class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <StoryCard
        v-for="story in filteredStories"
        :key="story.id"
        :story="story"
        @open-story="openStory"
      />

      <div
        v-if="!query"
        class="group relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] border-2 border-dashed border-slate-200 bg-slate-50/50 p-8 text-center transition-all duration-500 hover:border-emerald-500/50 hover:bg-emerald-50/30 dark:border-slate-800 dark:bg-slate-900/30 dark:hover:bg-emerald-500/5"
      >
        <div
          class="absolute -right-4 -top-4 size-24 rounded-full bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/20"
        ></div>

        <div
          class="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-slate-800 dark:border dark:border-slate-700"
        >
          <span class="animate-bounce text-2xl"><CaUpdateNow /></span>
        </div>

        <h3
          class="text-lg font-black tracking-tight text-slate-900 dark:text-white"
        >
          Cerita Lainnya
        </h3>

        <div class="mt-2 flex items-center gap-2">
          <span class="relative flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"
            ></span>
          </span>
          <p
            class="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400"
          >
            Coming Soon
          </p>
        </div>

        <p
          class="mt-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400"
        >
          Tim kami sedang mengumpulkan legenda otentik dari wilayah pesisir
          hingga pegunungan tengah.
        </p>

        <div
          class="mt-6 h-1 w-20 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
        >
          <div
            class="h-full w-1/2 animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
          ></div>
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div
      v-else
      class="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/70 px-6 py-10 text-center"
    >
      <div
        class="flex h-14 w-14 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
      >
        <FlSearchSettings class="size-6" />
      </div>

      <p class="text-sm">Tidak ditemukan cerita rakyat Papua.</p>

      <p v-if="query" class="text-xs text-slate-500 dark:text-slate-500">
        Coba gunakan kata kunci lain.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { stories } from "../../../../data/stories";
import StorySearchBar from "./StorySearchBar.vue";
import StoryCard from "./StoryCard.vue";
import { useRouter } from "vue-router";
import { FlSearchSettings, CaUpdateNow } from "@kalimahapps/vue-icons";

const router = useRouter();
const query = ref("");

const filteredStories = computed(() => {
  const q = query.value.toLowerCase().trim();
  if (!q) return stories;
  return stories.filter((s) => {
    return (
      s.title.toLowerCase().includes(q) ||
      s.region.toLowerCase().includes(q) ||
      s.shortDescription.toLowerCase().includes(q)
    );
  });
});

const openStory = (id: string) => {
  // Sesuaikan dengan route detail cerita yang sudah kamu buat
  router.push({ name: "CultureDetail", params: { id } });
};
</script>
<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}

/* Opsional: Membuat font heading lebih konsisten dengan desain sebelumnya */
h1 {
  letter-spacing: -0.02em;
}
</style>
