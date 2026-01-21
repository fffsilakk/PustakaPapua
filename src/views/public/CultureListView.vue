<script setup lang="ts">
// import { storeToRefs } from "pinia";
// import { useCultureStore } from "../../stores/cultureStore";

import CultureHeader from "../../components/public/culture/CultureHeader.vue";
// import CultureCategoryTabs from "../../components/public/culture/CultureCategoryTabs.vue";
// import CultureListGrid from "../../components/public/culture/CultureListGrid.vue";
import CultureRegionStrip from "../../components/public/culture/CultureRegionStrip.vue";
import cultureVideo from "../../components/public/culture/cultureVideo.vue";
import CulturePhotoGallery from "../../components/public/culture/CulturePhotoGallery.vue";
import CultureWhySection from "../../components/public/culture/CultureWhySection.vue";
import CultureSwiper from "../../components/public/culture/CultureSwiper.vue";

// const cultureStore = useCultureStore();
// const { filteredItems, selectedCategory } = storeToRefs(cultureStore);

// const handleFavorite = (id: string) => {
//   cultureStore.toggleFavorite(id);
// };

// const handleOffline = (id: string) => {
//   cultureStore.markOffline(id);
// };
</script>

<template>
  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
    <CultureHeader />
    <CultureSwiper />
    <!-- <section class="mb-5">
      <CultureCategoryTabs v-model="selectedCategory" />
    </section>

    <CultureListGrid
      :items="filteredItems"
      @favorite-click="handleFavorite"
      @offline-click="handleOffline"
    /> -->
    <CultureRegionStrip />
    <cultureVideo />
    <CulturePhotoGallery />
    <CultureWhySection />
  </main>
</template>
