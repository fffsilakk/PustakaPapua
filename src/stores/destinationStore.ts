// src/stores/destinationStore.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type {
  Destination,
  DestinationCategory,
  DestinationRegion,
} from "../data/destination";
import { destinations as initialDestinations } from "../data/destination";

export type DestinationFilter = {
  search: string;
  category: DestinationCategory | "all";
  region: DestinationRegion | "all";
  onlyFavorite: boolean;
};

export const useDestinationStore = defineStore("destination", () => {
  const items = ref<Destination[]>([...initialDestinations]);

  const filter = ref<DestinationFilter>({
    search: "",
    category: "all",
    region: "all",
    onlyFavorite: false,
  });

  const filteredItems = computed(() => {
    return items.value.filter((dest) => {
      if (filter.value.onlyFavorite && !dest.isFavorite) return false;

      if (
        filter.value.category !== "all" &&
        dest.category !== filter.value.category
      ) {
        return false;
      }

      if (
        filter.value.region !== "all" &&
        dest.region !== filter.value.region
      ) {
        return false;
      }

      if (filter.value.search.trim()) {
        const q = filter.value.search.toLowerCase();
        const nameMatch = dest.name.toLowerCase().includes(q);
        const descMatch = dest.shortDescription.toLowerCase().includes(q);
        const locationMatch = dest.location.toLowerCase().includes(q);
        if (!nameMatch && !descMatch && !locationMatch) return false;
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

  const setCategory = (value: DestinationCategory | "all") => {
    filter.value.category = value;
  };

  const setRegion = (value: DestinationRegion | "all") => {
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
