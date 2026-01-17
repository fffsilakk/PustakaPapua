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
    class="bg-slate-50/60 px-4 pb-16 pt-4 sm:px-6 lg:px-8 dark:bg-slate-950/60"
  >
    <!-- Judul section kecil -->
    <div class="mx-auto mb-6 flex max-w-6xl items-center justify-between gap-3">
      <div>
        <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-50">
          Daftar alat musik
        </h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          Pilih salah satu alat musik untuk melihat asal, bahan, dan cara
          memainkannya.
        </p>
      </div>
      <p class="text-xs text-slate-500 dark:text-slate-400">
        {{ filteredItems.length }} alat musik
      </p>
    </div>

    <!-- Grid kartu -->
    <div
      class="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6"
    >
      <InstrumentCard
        v-for="instrument in filteredItems"
        :key="instrument.id"
        :instrument="instrument"
        @open-detail="handleOpenDetail"
        @toggle-favorite="instrumentStore.toggleFavorite"
      />
    </div>

    <!-- Empty state -->
    <div
      v-if="filteredItems.length === 0"
      class="mx-auto mt-10 flex max-w-lg flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white/80 px-6 py-10 text-center dark:border-slate-700 dark:bg-slate-900/80"
    >
      <p class="text-sm font-semibold text-slate-700 dark:text-slate-100">
        Belum ada alat musik yang cocok dengan filter.
      </p>
      <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Coba ubah kata kunci atau kategori yang digunakan.
      </p>
    </div>

    <!-- Modal detail -->
    <Teleport to="body">
      <transition name="fade">
        <div
          v-if="showDetail && selectedInstrument"
          class="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/70 px-4"
          @click.self="handleCloseDetail"
        >
          <div
            class="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-950 dark:border dark:border-slate-700"
          >
            <button
              type="button"
              class="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 shadow-sm hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              @click="handleCloseDetail"
            >
              ✕
            </button>

            <!-- Gambar -->
            <div
              class="h-48 w-full overflow-hidden rounded-t-2xl bg-slate-200 dark:bg-slate-800"
            >
              <img
                :src="
                  selectedInstrument.heroImage || selectedInstrument.thumbnail
                "
                :alt="selectedInstrument.name"
                class="h-full w-full object-cover"
              />
            </div>

            <!-- Konten detail -->
            <div class="px-5 pb-5 pt-4">
              <p
                class="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300"
              >
                Alat musik · {{ selectedInstrument.region }}
              </p>
              <h3
                class="mt-1 text-xl font-semibold text-slate-900 dark:text-slate-50"
              >
                {{ selectedInstrument.name }}
              </h3>

              <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {{ selectedInstrument.description }}
              </p>

              <dl
                class="mt-4 grid grid-cols-1 gap-3 text-sm text-slate-700 dark:text-slate-200 sm:grid-cols-2"
              >
                <div>
                  <dt
                    class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
                  >
                    Bahan utama
                  </dt>
                  <dd class="mt-0.5">
                    {{ selectedInstrument.materials }}
                  </dd>
                </div>

                <div>
                  <dt
                    class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
                  >
                    Cara memainkan
                  </dt>
                  <dd class="mt-0.5">
                    {{ selectedInstrument.howToPlay }}
                  </dd>
                </div>

                <div class="sm:col-span-2">
                  <dt
                    class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
                  >
                    Digunakan dalam
                  </dt>
                  <dd class="mt-0.5">
                    {{ selectedInstrument.usageContext }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
