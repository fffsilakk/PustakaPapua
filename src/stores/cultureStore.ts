import { defineStore } from "pinia";
import {
  cultures,
  type CultureItem,
  type CultureCategory,
} from "../data/cultures";

interface CultureState {
  items: CultureItem[];
  selectedCategory: CultureCategory | "all";
}

export const useCultureStore = defineStore("culture", {
  state: (): CultureState => ({
    items: cultures,
    selectedCategory: "all",
  }),
  getters: {
    filteredItems(state): CultureItem[] {
      if (state.selectedCategory === "all") return state.items;
      return state.items.filter((i) => i.category === state.selectedCategory);
    },
    getById: (state) => {
      return (id: string) => state.items.find((i) => i.id === id);
    },
  },
  actions: {
    setCategory(category: CultureCategory | "all") {
      this.selectedCategory = category;
    },
    toggleFavorite(id: string) {
      this.items = this.items.map((i) =>
        i.id === id ? { ...i, isFavorite: !i.isFavorite } : i
      );
    },
    markOffline(id: string) {
      this.items = this.items.map((i) =>
        i.id === id ? { ...i, isOfflineAvailable: true } : i
      );
    },
  },
});
