// src/stores/languageStore.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type {
  LocalLanguage,
  LanguageCategory,
  LanguageRegion,
} from "../data/language";
import { localLanguages as initialLanguages } from "../data/language";

export type LanguageFilter = {
  search: string;
  category: LanguageCategory | "all";
  region: LanguageRegion | "all";
  onlyFavorite: boolean;
};

export const useLanguageStore = defineStore("language", () => {
  const items = ref<LocalLanguage[]>([...initialLanguages]);

  const filter = ref<LanguageFilter>({
    search: "",
    category: "all",
    region: "all",
    onlyFavorite: false,
  });

  const filteredItems = computed(() => {
    return items.value.filter((lang) => {
      if (filter.value.onlyFavorite && !lang.isFavorite) return false;

      if (
        filter.value.category !== "all" &&
        lang.category !== filter.value.category
      ) {
        return false;
      }

      if (
        filter.value.region !== "all" &&
        lang.region !== filter.value.region
      ) {
        return false;
      }

      if (filter.value.search.trim()) {
        const q = filter.value.search.toLowerCase();
        const nameMatch = lang.name.toLowerCase().includes(q);
        const descMatch = lang.shortDescription.toLowerCase().includes(q);
        const areaMatch = lang.area.toLowerCase().includes(q);
        const greetingMatch = (lang.exampleGreeting ?? "")
          .toLowerCase()
          .includes(q);

        if (!nameMatch && !descMatch && !areaMatch && !greetingMatch) {
          return false;
        }
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

  const setCategory = (value: LanguageCategory | "all") => {
    filter.value.category = value;
  };

  const setRegion = (value: LanguageRegion | "all") => {
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
