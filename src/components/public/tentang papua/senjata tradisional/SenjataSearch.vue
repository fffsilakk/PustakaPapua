<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useSenjataStore } from "../../../../stores/senjataStore";

const senjataStore = useSenjataStore();
const { searchQuery } = storeToRefs(senjataStore);

const query = computed({
  get: () => searchQuery.value,
  set: (val: string) => senjataStore.setSearchQuery(val),
});

const handleClear = () => {
  query.value = "";
};
</script>

<template>
  <section class="my-8 px-4 sm:px-6 lg:px-8">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
      class="mx-auto max-w-6xl"
    >
      <div
        class="flex flex-col gap-6 rounded-[2rem] border border-slate-200/60 bg-white/50 p-6 backdrop-blur-xl transition-all duration-300 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800/50 dark:bg-slate-900/50"
      >
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <div class="h-1 w-6 rounded-full bg-emerald-500"></div>
            <h2
              class="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400"
            >
              Eksplorasi Katalog
            </h2>
          </div>
          <h3 class="text-xl font-bold text-slate-800 dark:text-white">
            Pencarian Senjata
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Cari berdasarkan
            <span class="font-medium text-emerald-600">Suku, Wilayah,</span>
            atau
            <span class="font-medium text-emerald-600">Jenis Senjata</span>.
          </p>
        </div>

        <div class="w-full max-w-md">
          <label class="sr-only" for="search-senjata"
            >Cari senjata tradisional</label
          >
          <div class="group relative">
            <span
              class="absolute inset-y-0 left-4 flex items-center text-slate-400 transition-colors group-focus-within:text-emerald-500"
            >
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </span>

            <input
              id="search-senjata"
              v-model="query"
              type="text"
              autocomplete="off"
              placeholder="Cari senjata: misal Busur, Tombak..."
              class="w-full rounded-2xl border-2 border-slate-200 bg-white py-3 pl-12 pr-12 text-sm font-medium text-slate-700 shadow-sm transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-emerald-400"
            />

            <Transition name="fade-scale">
              <button
                v-if="query"
                type="button"
                @click="handleClear"
                class="absolute inset-y-0 right-3 flex items-center px-2 text-slate-400 transition-all hover:text-rose-500"
              >
                <div class="rounded-full bg-slate-100 p-1 dark:bg-slate-700">
                  <svg
                    class="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </button>
            </Transition>
          </div>
        </div>
      </div>

      <div v-if="query" class="mt-4 px-4">
        <p class="text-xs italic text-slate-400">
          Menampilkan hasil pencarian untuk:
          <span class="font-bold text-emerald-500">"{{ query }}"</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animasi Transisi Tombol Clear */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.2s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
