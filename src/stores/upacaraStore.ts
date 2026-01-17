// src/stores/upacaraStore.ts
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Upacara } from "../data/upacara";
import { upacaraList } from "../data/upacara";

export const useUpacaraStore = defineStore("upacara", () => {
  const items = ref<Upacara[]>(upacaraList);
  const searchQuery = ref("");
  const selectedRegion = ref<string | null>(null);

  const filtered = computed(() => {
    let result = items.value;

    if (selectedRegion.value) {
      result = result.filter(
        (u) => u.region.toLowerCase() === selectedRegion.value?.toLowerCase()
      );
    }

    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase();
      result = result.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.tribe.toLowerCase().includes(q) ||
          u.region.toLowerCase().includes(q)
      );
    }

    return result;
  });

  const setSearchQuery = (value: string) => {
    searchQuery.value = value;
  };

  const setRegion = (value: string | null) => {
    selectedRegion.value = value;
  };

  return {
    items,
    searchQuery,
    selectedRegion,
    filtered,
    setSearchQuery,
    setRegion,
  };
});
