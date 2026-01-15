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

export const useEduStore = defineStore("edu", {
  state: (): EduState => ({
    modules: eduModules,
    selectedCategory: "all",
  }),
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
    },
  },
});
