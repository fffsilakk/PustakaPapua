import { defineStore } from "pinia";
import {
  cultures,
  type CultureItem,
  type CultureCategory,
} from "../data/cultures";

interface CultureState {
  items: CultureItem[];
  selectedCategory: CultureCategory | "all" | "favorite";
}

const OFFLINE_KEY = "spt-offline-culture-ids";
const FAVORITE_KEY = "spt-favorite-culture-ids";

function loadIds(key: string): string[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveIds(key: string, ids: string[]) {
  try {
    localStorage.setItem(key, JSON.stringify(ids));
  } catch {
    // abaikan sementara
  }
}

export const useCultureStore = defineStore("culture", {
  state: (): CultureState => {
    const offlineIds = loadIds(OFFLINE_KEY);
    const favoriteIds = loadIds(FAVORITE_KEY);

    return {
      items: cultures.map((i) => ({
        ...i,
        isOfflineAvailable: offlineIds.includes(i.id),
        isFavorite: favoriteIds.includes(i.id),
      })),
      selectedCategory: "all",
    };
  },

  getters: {
    filteredItems(state): CultureItem[] {
      if (state.selectedCategory === "all") return state.items;

      if (state.selectedCategory === "favorite") {
        return state.items.filter((i) => i.isFavorite);
      }

      return state.items.filter((i) => i.category === state.selectedCategory);
    },
    getById: (state) => {
      return (id: string) => state.items.find((i) => i.id === id);
    },
  },

  actions: {
    setCategory(category: CultureCategory | "all" | "favorite") {
      this.selectedCategory = category;
    },

    toggleFavorite(id: string) {
      this.items = this.items.map((i) =>
        i.id === id ? { ...i, isFavorite: !i.isFavorite } : i
      );

      const favoriteIds = this.items
        .filter((i) => i.isFavorite)
        .map((i) => i.id);

      saveIds(FAVORITE_KEY, favoriteIds);
    },

    markOffline(id: string) {
      this.items = this.items.map((i) =>
        i.id === id ? { ...i, isOfflineAvailable: true } : i
      );

      const offlineIds = this.items
        .filter((i) => i.isOfflineAvailable)
        .map((i) => i.id);

      saveIds(OFFLINE_KEY, offlineIds);
    },
  },
});
