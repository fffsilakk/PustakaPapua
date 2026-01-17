// src/stores/danceStore.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Dance, DanceCategory, DanceRegion } from "../data/dance";
import { dances as initialDances } from "../data/dance";

export type DanceFilter = {
  search: string;
  category: DanceCategory | "all";
  region: DanceRegion | "all";
  onlyFavorite: boolean;
};

export const useDanceStore = defineStore("dance", () => {
  const items = ref<Dance[]>([...initialDances]);

  const filter = ref<DanceFilter>({
    search: "",
    category: "all",
    region: "all",
    onlyFavorite: false,
  });

  const filteredItems = computed(() => {
    return items.value.filter((dance) => {
      if (filter.value.onlyFavorite && !dance.isFavorite) return false;

      if (
        filter.value.category !== "all" &&
        dance.category !== filter.value.category
      ) {
        return false;
      }

      if (
        filter.value.region !== "all" &&
        dance.region !== filter.value.region
      ) {
        return false;
      }

      if (filter.value.search.trim()) {
        const q = filter.value.search.toLowerCase();
        const nameMatch = dance.name.toLowerCase().includes(q);
        const descMatch = dance.shortDescription.toLowerCase().includes(q);
        if (!nameMatch && !descMatch) return false;
      }

      return true;
    });
  });

  const getById = (id: string) => {
    return items.value.find((d) => d.id === id) ?? null;
  };

  const toggleFavorite = (id: string) => {
    const found = items.value.find((d) => d.id === id);
    if (found) {
      found.isFavorite = !found.isFavorite;
    }
  };

  const setSearch = (value: string) => {
    filter.value.search = value;
  };

  const setCategory = (value: DanceCategory | "all") => {
    filter.value.category = value;
  };

  const setRegion = (value: DanceRegion | "all") => {
    filter.value.region = value;
  };

  const setOnlyFavorite = (value: boolean) => {
    filter.value.onlyFavorite = value;
  };

  return {
    items,
    filter,
    filteredItems,
    getById,
    toggleFavorite,
    setSearch,
    setCategory,
    setRegion,
    setOnlyFavorite,
  };
});
