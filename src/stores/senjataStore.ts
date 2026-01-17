import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Senjata } from "../data/senjata";
import { senjataList } from "../data/senjata";

export const useSenjataStore = defineStore("senjata", () => {
  const items = ref<Senjata[]>(senjataList);
  const searchQuery = ref("");

  const filtered = computed(() => {
    if (!searchQuery.value.trim()) return items.value;

    const q = searchQuery.value.toLowerCase();
    return items.value.filter((s) => {
      return (
        s.name.toLowerCase().includes(q) ||
        s.tribe.toLowerCase().includes(q) ||
        s.region.toLowerCase().includes(q) ||
        s.type.toLowerCase().includes(q)
      );
    });
  });

  const setSearchQuery = (value: string) => {
    searchQuery.value = value;
  };

  const toggleFavorite = (id: string) => {
    const senjata = items.value.find((s) => s.id === id);
    if (!senjata) return;
    senjata.isFavorite = !senjata.isFavorite;
  };

  return {
    items,
    searchQuery,
    filtered,
    setSearchQuery,
    toggleFavorite,
  };
});
