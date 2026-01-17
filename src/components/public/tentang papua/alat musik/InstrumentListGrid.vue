<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useInstrumentStore } from "../../../../stores/instrumentStore";
import type { Instrument } from "../../../../data/instrument";
import InstrumentCard from "./InstrumentCard.vue";

const instrumentStore = useInstrumentStore();
const { filteredItems } = storeToRefs(instrumentStore);

const showDetail = ref(false);
const selectedInstrument = ref<Instrument | null>(null);

const handleOpenDetail = (instrument: Instrument) => {
  selectedInstrument.value = instrument;
  showDetail.value = true;
};

const handleCloseDetail = () => {
  showDetail.value = false;
  selectedInstrument.value = null;
};
</script>

<template>
  <section
    class="min-h-[500px] bg-slate-50/50 px-4 pb-20 pt-8 dark:bg-slate-950/50"
  >
    <div
      v-motion
      :initial="{ opacity: 0, x: -15 }"
      :enter="{ opacity: 1, x: 0 }"
      class="mx-auto mb-10 flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between px-2"
    >
      <div class="space-y-1">
        <h2
          class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
        >
          Koleksi Alat Musik
        </h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          Pelajari asal, bahan, dan simfoni unik dari tanah Papua.
        </p>
      </div>

      <div
        class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-bold text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
      >
        <span class="h-2 w-2 rounded-full bg-amber-500"></span>
        {{ filteredItems.length }} Instrumen Ditemukan
      </div>
    </div>

    <div class="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <InstrumentCard
        v-for="(instrument, index) in filteredItems"
        :key="instrument.id"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: index * 80 } }"
        :instrument="instrument"
        @open-detail="handleOpenDetail"
        @toggle-favorite="instrumentStore.toggleFavorite"
      />
    </div>

    <div
      v-if="filteredItems.length === 0"
      class="mx-auto mt-20 flex max-w-md flex-col items-center rounded-3xl border border-dashed border-slate-300 bg-white/50 p-12 text-center dark:border-slate-700 dark:bg-slate-900/50"
    >
      <div class="mb-4 text-4xl opacity-40">🪘</div>
      <h3 class="text-base font-bold text-slate-800 dark:text-white">
        Instrumen Tidak Ditemukan
      </h3>
      <p class="mt-2 text-xs text-slate-500 dark:text-slate-400">
        Coba gunakan kata kunci lain seperti "Tifa" atau "Pikon".
      </p>
    </div>

    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="showDetail && selectedInstrument"
          class="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div
            class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            @click="handleCloseDetail"
          />

          <div
            class="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900"
          >
            <button
              @click="handleCloseDetail"
              class="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-500 backdrop-blur-md transition-colors hover:text-rose-500 dark:bg-slate-800"
            >
              ✕
            </button>

            <div class="flex flex-col md:flex-row">
              <div class="relative h-60 w-full md:h-auto md:w-5/12">
                <img
                  :src="
                    selectedInstrument.heroImage || selectedInstrument.thumbnail
                  "
                  :alt="selectedInstrument.name"
                  class="h-full w-full object-cover"
                />
              </div>

              <div class="flex-1 p-8">
                <span
                  class="inline-block rounded-lg bg-amber-50 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                >
                  {{ selectedInstrument.region }}
                </span>

                <h3
                  class="mt-3 text-2xl font-bold text-slate-900 dark:text-white"
                >
                  {{ selectedInstrument.name }}
                </h3>

                <p
                  class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                >
                  {{ selectedInstrument.description }}
                </p>

                <div class="mt-6 space-y-4">
                  <div class="grid grid-cols-2 gap-4">
                    <div
                      class="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50"
                    >
                      <p
                        class="text-[10px] font-bold uppercase text-slate-400 tracking-tighter"
                      >
                        Bahan Utama
                      </p>
                      <p
                        class="text-xs font-semibold text-slate-700 dark:text-slate-200"
                      >
                        {{ selectedInstrument.materials }}
                      </p>
                    </div>
                    <div
                      class="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50"
                    >
                      <p
                        class="text-[10px] font-bold uppercase text-slate-400 tracking-tighter"
                      >
                        Cara Main
                      </p>
                      <p
                        class="text-xs font-semibold text-slate-700 dark:text-slate-200"
                      >
                        {{ selectedInstrument.howToPlay }}
                      </p>
                    </div>
                  </div>

                  <div
                    class="rounded-xl border border-amber-100 bg-amber-50/30 p-4 dark:border-amber-900/20 dark:bg-amber-900/10"
                  >
                    <p
                      class="text-[10px] font-bold uppercase text-amber-700 dark:text-amber-400 mb-1"
                    >
                      Konteks Budaya
                    </p>
                    <p
                      class="text-xs leading-relaxed text-slate-700 dark:text-slate-300"
                    >
                      {{ selectedInstrument.usageContext }}
                    </p>
                  </div>
                </div>

                <button
                  @click="handleCloseDetail"
                  class="mt-8 w-full rounded-2xl bg-slate-900 py-4 text-xs font-bold text-white transition-all hover:bg-amber-600 dark:bg-amber-600"
                >
                  Tutup Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}
</style>
