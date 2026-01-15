<template>
  <section class="max-w-6xl mx-auto px-4 py-8">
    <header class="mb-6">
      <h1 class="text-2xl font-semibold mb-1">Budaya Papua & Timur</h1>
      <p class="text-sm text-slate-300">
        Jelajahi tarian, musik, bahasa, dan cerita rakyat dari Papua dan wilayah
        Timur. Konten ini dapat disimpan untuk dipelajari kembali secara
        offline.
      </p>
    </header>

    <CultureCategoryTabs v-model="selectedCategory" />

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CultureCard
        v-for="item in filteredItems"
        :key="item.id"
        :item="item"
        @favorite-click="() => cultureStore.toggleFavorite(item.id)"
        @offline-click="() => cultureStore.markOffline(item.id)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCultureStore } from "../../stores/cultureStore";
import CultureCard from "../../components/public/culture/CultureCard.vue";
import CultureCategoryTabs from "../../components/public/culture/CultureCategoryTabs.vue";

const cultureStore = useCultureStore();
const { filteredItems, selectedCategory } = storeToRefs(cultureStore);
</script>
