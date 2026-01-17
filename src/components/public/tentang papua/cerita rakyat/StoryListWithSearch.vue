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
import { FlSearchSettings } from "@kalimahapps/vue-icons";

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
