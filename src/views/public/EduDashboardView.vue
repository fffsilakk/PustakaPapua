<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue"; // Tambahkan onMounted
import { storeToRefs } from "pinia";
import { useEduStore } from "../../stores/eduStore";
import EduHeader from "../../components/public/edu/EduHero.vue";
import EduFilterSection from "../../components/public/edu/EduFilterSection.vue";
import EduModuleGrid from "../../components/public/edu/EduModuleGrid.vue";
import EduSearch from "../../components/public/edu/EduSearch.vue";
import EduAbout from "../../components/public/edu/EduAbout.vue";

const eduStore = useEduStore();

const { filteredModules, selectedCategory, searchQuery } =
  storeToRefs(eduStore);

const loadingId = ref<string | null>(null);

// ==== LOGIKA ADAPTIF (Mobile 4, Desktop 6) ====
const getPageSize = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth < 768 ? 4 : 6;
  }
  return 6;
};

const visibleCount = ref(getPageSize());

const visibleModules = computed(() =>
  filteredModules.value.slice(0, visibleCount.value),
);

const loadMore = () => {
  const size = getPageSize();
  visibleCount.value = Math.min(
    visibleCount.value + size,
    filteredModules.value.length,
  );
};

// Pastikan inisialisasi ukuran saat mounted
onMounted(() => {
  visibleCount.value = getPageSize();
});

// Reset visibleCount saat filter atau search berubah
watch([selectedCategory, searchQuery], () => {
  visibleCount.value = getPageSize();
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
      return "Seni & Budaya";
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
      :visible-count="visibleCount"
      :total-products="filteredModules.length"
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

    <EduAbout />
  </main>
</template>
