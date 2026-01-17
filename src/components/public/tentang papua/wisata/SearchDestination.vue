<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useDestinationStore } from "../../../../stores/destinationStore";

const destinationStore = useDestinationStore();
const { filter } = storeToRefs(destinationStore);

const query = computed({
  get: () => filter.value.search,
  set: (val: string) => destinationStore.setSearch(val),
});

const handleClear = () => {
  query.value = "";
};
</script>

<template>
  <section class="bg-transparent px-4 pt-4 sm:px-6 lg:px-8">
    <div
      class="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h2
          class="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300"
        >
          Pencarian destinasi
        </h2>
        <p class="text-xs text-slate-500 dark:text-slate-400">
          Cari berdasarkan nama tempat, lokasi, atau deskripsi singkat.
        </p>
      </div>

      <div class="w-full max-w-md">
        <label class="sr-only" for="search-destination">
          Cari tempat wisata Papua
        </label>
        <div class="relative">
          <span
            class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400 dark:text-slate-500"
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
            id="search-destination"
            v-model="query"
            type="text"
            autocomplete="off"
            placeholder="Cari Raja Ampat, Danau Sentani, Lembah Baliem..."
            class="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-9 pr-9 text-sm text-slate-800 shadow-sm placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-emerald-400"
          />

          <button
            v-if="query"
            type="button"
            @click="handleClear"
            class="absolute inset-y-0 right-2 flex items-center text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
