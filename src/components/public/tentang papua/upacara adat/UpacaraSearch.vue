<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useUpacaraStore } from "../../../../stores/upacaraStore";

const upacaraStore = useUpacaraStore();
const { searchQuery } = storeToRefs(upacaraStore);

const query = computed({
  get: () => searchQuery.value,
  set: (val: string) => upacaraStore.setSearchQuery(val),
});

const handleClear = () => {
  query.value = "";
};
</script>

<template>
  <section class="my-8 px-4 sm:px-6 lg:px-8">
    <div
      v-motion
      :initial="{ opacity: 0, y: 15 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
      class="mx-auto max-w-6xl"
    >
      <div
        class="flex flex-col gap-6 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-900/50"
      >
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            <h2
              class="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400"
            >
              Eksplorasi Ritual
            </h2>
          </div>
          <h3 class="text-lg font-bold text-slate-800 dark:text-white">
            Cari Upacara Adat
          </h3>
          <p class="text-[11px] text-slate-500 dark:text-slate-400">
            Temukan tradisi berdasarkan
            <span class="text-emerald-600 font-medium">Suku</span> atau
            <span class="text-emerald-600 font-medium">Wilayah</span>.
          </p>
        </div>

        <div class="w-full max-w-md">
          <label class="sr-only" for="search-upacara">Cari upacara adat</label>
          <div class="group relative">
            <span
              class="absolute inset-y-0 left-4 flex items-center text-slate-400 group-focus-within:text-emerald-600"
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
              id="search-upacara"
              v-model="query"
              type="text"
              autocomplete="off"
              placeholder="Contoh: Bakar Batu, Mbis Asmat..."
              class="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-3.5 pl-12 pr-12 text-sm font-medium text-slate-700 transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:focus:border-emerald-500"
            />

            <Transition name="scale">
              <button
                v-if="query"
                type="button"
                @click="handleClear"
                class="absolute inset-y-0 right-3 flex items-center px-2 text-slate-400 hover:text-rose-500"
              >
                <div class="rounded-full bg-slate-200/50 p-1 dark:bg-slate-700">
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

      <div v-if="query" class="mt-4 flex items-center gap-2 px-2">
        <p class="text-[11px] font-medium text-slate-400">
          Hasil untuk: <span class="text-emerald-600">"{{ query }}"</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animasi Transisi Sederhana */
.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
