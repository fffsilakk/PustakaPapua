// src/stores/instrumentStore.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type {
  Instrument,
  InstrumentCategory,
  InstrumentRegion,
} from "../data/instrument";
import { instruments as initialInstruments } from "../data/instrument";

export type InstrumentFilter = {
  search: string;
  category: InstrumentCategory | "all";
  region: InstrumentRegion | "all";
  onlyFavorite: boolean;
};

export const useInstrumentStore = defineStore("instrument", () => {
  const items = ref<Instrument[]>([...initialInstruments]);

  const filter = ref<InstrumentFilter>({
    search: "",
    category: "all",
    region: "all",
    onlyFavorite: false,
  });

  const filteredItems = computed(() => {
    return items.value.filter((ins) => {
      if (filter.value.onlyFavorite && !ins.isFavorite) return false;

      if (
        filter.value.category !== "all" &&
        ins.category !== filter.value.category
      ) {
        return false;
      }

      if (filter.value.region !== "all" && ins.region !== filter.value.region) {
        return false;
      }

      if (filter.value.search.trim()) {
        const q = filter.value.search.toLowerCase();
        const nameMatch = ins.name.toLowerCase().includes(q);
        const descMatch = ins.shortDescription.toLowerCase().includes(q);
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

  const setCategory = (value: InstrumentCategory | "all") => {
    filter.value.category = value;
  };

  const setRegion = (value: InstrumentRegion | "all") => {
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
