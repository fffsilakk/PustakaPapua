import { defineStore } from "pinia";
import {
  eduModules,
  type EduModule,
  type EduCategory,
} from "../data/eduModules";

interface EduState {
  modules: EduModule[];
  selectedCategory: EduCategory | "all";
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
  } catch {
    // abaikan error quota, dll untuk sementara
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
    };
  },
  getters: {
    filteredModules(state): EduModule[] {
      if (state.selectedCategory === "all") return state.modules;
      return state.modules.filter((m) => m.category === state.selectedCategory);
    },
    getById: (state) => {
      return (id: string) => state.modules.find((m) => m.id === id);
    },
  },
  actions: {
    setCategory(category: EduCategory | "all") {
      this.selectedCategory = category;
    },
    markOffline(id: string) {
      this.modules = this.modules.map((m) =>
        m.id === id ? { ...m, isOfflineAvailable: true } : m
      );

      const offlineIds = this.modules
        .filter((m) => m.isOfflineAvailable)
        .map((m) => m.id);

      saveOfflineIds(offlineIds);
    },
  },
});
