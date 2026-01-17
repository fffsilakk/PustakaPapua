<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useDestinationStore } from "../../../../stores/destinationStore";
import type { Destination } from "../../../../data/destination";
import DestinationCard from "./DestinationCard.vue";

const destinationStore = useDestinationStore();
const { filteredItems } = storeToRefs(destinationStore);

const showDetail = ref(false);
const selectedDestination = ref<Destination | null>(null);

const handleOpenDetail = (destination: Destination) => {
  selectedDestination.value = destination;
  showDetail.value = true;
};

const handleCloseDetail = () => {
  showDetail.value = false;
  selectedDestination.value = null;
};
</script>

<template>
  <section
    class="bg-slate-50/60 px-4 pb-16 pt-4 sm:px-6 lg:px-8 dark:bg-slate-950/60"
  >
    <div class="mx-auto mb-6 flex max-w-6xl items-center justify-between gap-3">
      <div>
        <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-50">
          Destinasi wisata Papua
        </h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          Temukan keindahan alam dan budaya dari laut, danau, hingga pegunungan.
        </p>
      </div>
      <p class="text-xs text-slate-500 dark:text-slate-400">
        {{ filteredItems.length }} destinasi
      </p>
    </div>

    <div
      class="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6"
    >
      <DestinationCard
        v-for="destination in filteredItems"
        :key="destination.id"
        :destination="destination"
        @open-detail="handleOpenDetail"
        @toggle-favorite="destinationStore.toggleFavorite"
      />
    </div>

    <div
      v-if="filteredItems.length === 0"
      class="mx-auto mt-10 flex max-w-lg flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white/80 px-6 py-10 text-center dark:border-slate-700 dark:bg-slate-900/80"
    >
      <p class="text-sm font-semibold text-slate-700 dark:text-slate-100">
        Belum ada destinasi yang cocok dengan filter.
      </p>
      <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Coba ubah kata kunci atau kategori yang digunakan.
      </p>
    </div>

    <Teleport to="body">
      <transition name="modal-bounce">
        <div
          v-if="showDetail && selectedDestination"
          class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
          @click.self="handleCloseDetail"
        >
          <div
            class="relative flex flex-col max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl dark:border dark:border-slate-800 dark:bg-slate-900"
          >
            <button
              type="button"
              class="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-rose-500 hover:scale-110 active:scale-90"
              @click="handleCloseDetail"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div class="relative h-60 w-full shrink-0 sm:h-72">
              <img
                :src="
                  selectedDestination.heroImage || selectedDestination.thumbnail
                "
                :alt="selectedDestination.name"
                class="h-full w-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-4 left-8">
                <span
                  class="inline-block rounded-lg bg-emerald-500 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg"
                >
                  {{ selectedDestination.region }}
                </span>
                <h2
                  class="mt-1 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl"
                >
                  {{ selectedDestination.name }}
                </h2>
              </div>
            </div>

            <div
              class="flex-1 overflow-y-auto custom-scrollbar px-8 pb-4 sm:px-10"
            >
              <div class="flex items-center gap-2 mb-4">
                <span class="text-emerald-500">📍</span>
                <p
                  class="text-xs font-bold uppercase tracking-widest text-slate-400"
                >
                  {{ selectedDestination.location }}
                </p>
              </div>

              <div class="relative">
                <p
                  class="text-base leading-relaxed text-slate-600 dark:text-slate-400 mb-8"
                >
                  {{ selectedDestination.description }}
                </p>
              </div>

              <div class="grid gap-4 sm:grid-cols-2 mb-8">
                <div
                  class="rounded-3xl bg-slate-50 p-5 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
                >
                  <h4
                    class="text-[9px] font-black uppercase tracking-widest text-emerald-600 mb-1"
                  >
                    Waktu Terbaik
                  </h4>
                  <p
                    class="text-sm font-semibold text-slate-800 dark:text-slate-200"
                  >
                    {{ selectedDestination.bestTimeToVisit }}
                  </p>
                </div>
                <div
                  class="rounded-3xl bg-slate-50 p-5 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
                >
                  <h4
                    class="text-[9px] font-black uppercase tracking-widest text-emerald-600 mb-1"
                  >
                    Aktivitas
                  </h4>
                  <p
                    class="text-sm font-semibold text-slate-800 dark:text-slate-200"
                  >
                    {{ selectedDestination.activities }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="p-6 border-t border-slate-50 dark:border-slate-800 shrink-0"
            >
              <button
                @click="handleCloseDetail"
                class="w-full rounded-2xl bg-slate-900 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-emerald-600 active:scale-95 dark:bg-emerald-600"
              >
                Kembali ke Eksplorasi
              </button>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<style scoped>
/* Transisi Modal */
.modal-bounce-enter-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.modal-bounce-leave-active {
  transition: all 0.25s ease-in;
}
.modal-bounce-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(30px);
}
.modal-bounce-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #334155;
}

/* Efek masking untuk memberi petunjuk bahwa teks bisa di-scroll */
.custom-scrollbar {
  mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
}
</style>
