<!-- <template>
  <section class="max-w-6xl mx-auto px-4 py-8">
    <header class="mb-6">
      <h1 class="text-2xl font-semibold mb-1">Modul Belajar</h1>
      <p class="text-sm text-slate-300">
        Pilih materi yang relevan dengan kebutuhan komunitas di Papua. Konten
        bisa disimpan untuk dipelajari tanpa internet.
      </p>
    </header>
    <ModuleFilterBar v-model="selectedCategory" />

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ModuleCard
        v-for="mod in filteredModules"
        :key="mod.id"
        :module="mod"
        :loading="loadingId === mod.id"
        @offline-click="handleOfflineClick(mod.id)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useEduStore } from "../../stores/eduStore";
import ModuleCard from "../../components/public/edu/ModuleCard.vue";
import ModuleFilterBar from "../../components/public/edu/ModuleFilterBar.vue";

const eduStore = useEduStore();
const { filteredModules, selectedCategory } = storeToRefs(eduStore);

const loadingId = ref<string | null>(null);

const handleOfflineClick = async (id: string) => {
  loadingId.value = id;
  await new Promise((resolve) => setTimeout(resolve, 1200));
  eduStore.markOffline(id);
  loadingId.value = null;
};
</script> -->

<script setup lang="ts">
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useEduStore } from "../../stores/eduStore";

import EduHeader from "../../components/public/edu/EduHero.vue";
import EduFilterSection from "../../components/public/edu/EduFilterSection.vue";
import EduModuleGrid from "../../components/public/edu/EduModuleGrid.vue";

const eduStore = useEduStore();
const { filteredModules, selectedCategory } = storeToRefs(eduStore);

const loadingId = ref<string | null>(null);

const handleOfflineClick = async (id: string) => {
  if (loadingId.value) return;
  loadingId.value = id;
  await new Promise((r) => setTimeout(r, 800));
  eduStore.markOffline(id);
  loadingId.value = null;
};

const categoryText = computed(() => {
  switch (selectedCategory.value) {
    case "coding":
      return "Coding";
    case "agrikultur":
      return "Agrikultur";
    case "bahasa":
      return "Bahasa Inggris";
    default:
      return "Semua";
  }
});
</script>

<template>
  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
    <EduHeader />

    <EduFilterSection
      v-model:category="selectedCategory"
      :count="filteredModules.length"
      :category-text="categoryText"
    />

    <EduModuleGrid
      :modules="filteredModules"
      :loading-id="loadingId"
      @offline-click="handleOfflineClick"
    />
  </main>
</template>
