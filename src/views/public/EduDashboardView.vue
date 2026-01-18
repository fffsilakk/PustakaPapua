<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { storeToRefs } from "pinia";
import { useEduStore } from "../../stores/eduStore";
import EduHeader from "../../components/public/edu/EduHero.vue";
import EduFilterSection from "../../components/public/edu/EduFilterSection.vue";
import EduModuleGrid from "../../components/public/edu/EduModuleGrid.vue";
import EduSearch from "../../components/public/edu/EduSearch.vue";

const eduStore = useEduStore();

const { filteredModules, selectedCategory, searchQuery } =
  storeToRefs(eduStore);

const loadingId = ref<string | null>(null);

const PAGE_SIZE = 6;
const visibleCount = ref(PAGE_SIZE);

const visibleModules = computed(() =>
  filteredModules.value.slice(0, visibleCount.value),
);

const loadMore = () => {
  visibleCount.value = Math.min(
    visibleCount.value + PAGE_SIZE,
    filteredModules.value.length,
  );
};

// 3. Reset visibleCount saat filter atau search berubah
// Pastikan variabel di dalam watch sudah ada (filteredModules, selectedCategory, searchQuery)
watch([filteredModules, selectedCategory, searchQuery], () => {
  visibleCount.value = PAGE_SIZE;
});

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
    case "budaya":
      return "Seni & Budaya"; // Tadi di sini penyebab errornya (kosong)
    default:
      return "Semua Kategori";
  }
});
</script>

<template>
  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
    <EduHeader />

    <EduSearch v-model="searchQuery" />

    <EduFilterSection
      v-model:category="selectedCategory"
      :count="filteredModules.length"
      :category-text="categoryText"
    />

    <EduModuleGrid
      :modules="visibleModules"
      :loading-id="loadingId"
      @offline-click="handleOfflineClick"
    />

    <div
      v-if="visibleCount < filteredModules.length"
      class="flex justify-center mt-10"
    >
      <button
        type="button"
        class="px-6 py-2 rounded-full text-sm font-semibold border border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
        @click="loadMore"
      >
        Lihat selengkapnya
      </button>
    </div>

    <p
      v-else-if="filteredModules.length > 0"
      class="mt-10 text-center text-xs text-slate-400"
    >
      Semua modul edukasi telah ditampilkan.
    </p>
  </main>
</template>
