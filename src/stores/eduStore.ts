import { defineStore } from "pinia";
import {
  eduModules,
  type EduModule,
  type EduCategory,
} from "../data/eduModules";

interface EduState {
  modules: EduModule[];
  selectedCategory: EduCategory | "all";
  searchQuery: string;
}

const OFFLINE_KEY = "spt-offline-edu-ids";

function loadOfflineIds(): string[] {
  try {
    const raw = localStorage.getItem(OFFLINE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveOfflineIds(ids: string[]) {
  try {
    localStorage.setItem(OFFLINE_KEY, JSON.stringify(ids));
  } catch (e) {
    console.error("Gagal menyimpan ke LocalStorage", e);
  }
}

export const useEduStore = defineStore("edu", {
  state: (): EduState => {
    const offlineIds = loadOfflineIds();

    return {
      modules: eduModules.map((m) => ({
        ...m,
        isOfflineAvailable: offlineIds.includes(m.id),
      })),
      selectedCategory: "all",
      searchQuery: "",
    };
  },

  getters: {
    filteredModules(state): EduModule[] {
      const query = state.searchQuery.toLowerCase().trim();

      return state.modules.filter((m) => {
        const matchesCategory =
          state.selectedCategory === "all" ||
          m.category === state.selectedCategory;

        const matchesSearch =
          m.title.toLowerCase().includes(query) ||
          (m.shortDescription &&
            m.shortDescription.toLowerCase().includes(query)) ||
          m.category.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
      });
    },
    getById: (state) => {
      return (id: string) => state.modules.find((m) => m.id === id);
    },
  },

  actions: {
    setCategory(category: EduCategory | "all") {
      this.selectedCategory = category;
    },

    setSearchQuery(query: string) {
      this.searchQuery = query;
    },

    markOffline(id: string) {
      this.modules = this.modules.map((m) =>
        m.id === id ? { ...m, isOfflineAvailable: true } : m,
      );
      const offlineIds = this.modules
        .filter((m) => m.isOfflineAvailable)
        .map((m) => m.id);

      saveOfflineIds(offlineIds);
    },
  },
});
