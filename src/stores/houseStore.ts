// src/stores/houseStore.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { House, HouseRegion, HouseCategory } from "../data/house";
import { houses as initialHouses } from "../data/house";

export type HouseFilter = {
  search: string;
  category: HouseCategory | "all";
  region: HouseRegion | "all";
  onlyFavorite: boolean;
};

export const useHouseStore = defineStore("house", () => {
  const items = ref<House[]>([...initialHouses]);

  const filter = ref<HouseFilter>({
    search: "",
    category: "all",
    region: "all",
    onlyFavorite: false,
  });

  const filteredItems = computed(() => {
    return items.value.filter((house) => {
      if (filter.value.onlyFavorite && !house.isFavorite) return false;

      if (
        filter.value.category !== "all" &&
        house.category !== filter.value.category
      ) {
        return false;
      }

      if (
        filter.value.region !== "all" &&
        house.region !== filter.value.region
      ) {
        return false;
      }

      if (filter.value.search.trim()) {
        const q = filter.value.search.toLowerCase();
        const nameMatch = house.name.toLowerCase().includes(q);
        const descMatch = house.shortDescription.toLowerCase().includes(q);
        if (!nameMatch && !descMatch) return false;
      }

      return true;
    });
  });

  const getById = (id: string) => {
    return items.value.find((x) => x.id === id) ?? null;
  };

  const toggleFavorite = (id: string) => {
    const found = items.value.find((x) => x.id === id);
    if (found) {
      found.isFavorite = !found.isFavorite;
    }
  };

  const setSearch = (value: string) => {
    filter.value.search = value;
  };

  const setCategory = (value: HouseCategory | "all") => {
    filter.value.category = value;
  };

  const setRegion = (value: HouseRegion | "all") => {
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
