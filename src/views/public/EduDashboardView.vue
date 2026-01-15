<template>
  <section class="max-w-6xl mx-auto px-4 py-8">
    <header class="mb-6">
      <h1 class="text-2xl font-semibold mb-1">Modul Belajar</h1>
      <p class="text-sm text-slate-300">
        Pilih materi yang relevan dengan kebutuhan komunitas di Papua. Konten
        bisa disimpan untuk dipelajari tanpa internet.
      </p>
    </header>

    <!-- Filter kategori -->
    <ModuleFilterBar v-model="selectedCategory" />

    <!-- Daftar modul -->
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
</script>
