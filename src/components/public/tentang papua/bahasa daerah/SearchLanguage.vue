<!-- src/components/public/tentang papua/bahasa/SearchLanguage.vue -->
<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useLanguageStore } from "../../../../stores/languageStore";

const languageStore = useLanguageStore();
const { filter } = storeToRefs(languageStore);

const query = computed({
  get: () => filter.value.search,
  set: (val: string) => languageStore.setSearch(val),
});

const handleClear = () => {
  query.value = "";
};
</script>

<template>
  <section class="bg-transparent px-4 pt-4 sm:px-6 lg:px-25 my-6">
    <div
      class="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h2
          class="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700"
        >
          Pencarian bahasa
        </h2>
        <p class="text-xs text-slate-500">
          Cari berdasarkan nama bahasa, daerah, atau sapaan contoh.
        </p>
      </div>

      <div class="w-full max-w-md">
        <label class="sr-only" for="search-language">Cari bahasa daerah</label>
        <div class="relative">
          <span
            class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400"
          >
            <svg
              class="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </span>

          <input
            id="search-language"
            v-model="query"
            type="text"
            autocomplete="off"
            placeholder="Cari bahasa, misalnya: Sentani, Mee, Kamoro..."
            class="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-9 pr-9 text-sm text-slate-800 shadow-sm placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
          />

          <button
            v-if="query"
            type="button"
            @click="handleClear"
            class="absolute inset-y-0 right-2 flex items-center text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
