<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useHouseStore } from "../../../../stores/houseStore";
import type { House } from "../../../../data/house";
import HouseCard from "./HouseCard.vue";

const houseStore = useHouseStore();
const { filteredItems } = storeToRefs(houseStore);

const showDetail = ref(false);
const selectedHouse = ref<House | null>(null);

const handleOpenDetail = (house: House) => {
  selectedHouse.value = house;
  showDetail.value = true;
};

const handleCloseDetail = () => {
  showDetail.value = false;
  selectedHouse.value = null;
};
</script>

<template>
  <section
    class="bg-slate-50/60 px-4 pb-16 pt-4 sm:px-6 lg:px-8 dark:bg-slate-950/60"
  >
    <div
      class="mx-auto mb-8 flex max-w-6xl items-end justify-between gap-3 px-1"
    >
      <div class="space-y-1">
        <h2
          class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Arsitektur Tradisional Papua
        </h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          Jelajahi filosofi, material alam, dan fungsi unik dari setiap hunian
          adat.
        </p>
      </div>
      <div class="hidden sm:block">
        <span
          class="rounded-full bg-amber-100 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
        >
          {{ filteredItems.length }} Koleksi
        </span>
      </div>
    </div>

    <div class="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <HouseCard
        v-for="house in filteredItems"
        :key="house.id"
        :house="house"
        @open-detail="handleOpenDetail"
        @toggle-favorite="houseStore.toggleFavorite"
      />
    </div>

    <div
      v-if="filteredItems.length === 0"
      class="mx-auto mt-12 flex max-w-lg flex-col items-center rounded-[2rem] border-2 border-dashed border-slate-200 bg-white/50 px-6 py-16 text-center dark:border-slate-800 dark:bg-slate-900/30"
    >
      <div class="mb-4 text-4xl">🏘️</div>
      <p class="text-base font-bold text-slate-800 dark:text-slate-200">
        Rumah adat tidak ditemukan
      </p>
      <p class="mt-2 text-sm text-slate-500">
        Coba sesuaikan filter wilayah atau kata kunci pencarian Anda.
      </p>
    </div>

    <Teleport to="body">
      <transition name="modal-bounce">
        <div
          v-if="showDetail && selectedHouse"
          class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-md"
          @click.self="handleCloseDetail"
        >
          <div
            class="relative flex flex-col max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl dark:border dark:border-slate-800 dark:bg-slate-950"
          >
            <button
              type="button"
              class="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-all hover:bg-rose-500 hover:scale-110 active:scale-90"
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

            <div class="relative h-64 w-full shrink-0 sm:h-80">
              <img
                :src="selectedHouse.heroImage || selectedHouse.thumbnail"
                :alt="selectedHouse.name"
                class="h-full w-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-transparent"
              ></div>

              <div class="absolute bottom-4 left-8">
                <div class="flex items-center gap-2 mb-2">
                  <span
                    class="rounded-md bg-amber-500 px-2 py-1 text-[9px] font-black uppercase tracking-tighter text-white"
                  >
                    {{ selectedHouse.region }}
                  </span>
                </div>
                <h2
                  class="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl"
                >
                  {{ selectedHouse.name }}
                </h2>
              </div>
            </div>

            <div
              class="flex-1 overflow-y-auto custom-scrollbar px-8 pb-6 pt-2 sm:px-10"
            >
              <div class="relative mb-8">
                <p
                  class="text-base leading-relaxed text-slate-600 dark:text-slate-400"
                >
                  {{ selectedHouse.description }}
                </p>
              </div>

              <div class="grid gap-4 sm:grid-cols-2 mb-6">
                <div
                  class="rounded-[1.5rem] border border-slate-100 bg-slate-50/50 p-5 dark:border-slate-800 dark:bg-slate-900/50"
                >
                  <h4
                    class="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-2"
                  >
                    🌿 Bahan Utama
                  </h4>
                  <p
                    class="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug"
                  >
                    {{ selectedHouse.materials }}
                  </p>
                </div>
                <div
                  class="rounded-[1.5rem] border border-slate-100 bg-slate-50/50 p-5 dark:border-slate-800 dark:bg-slate-900/50"
                >
                  <h4
                    class="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-2"
                  >
                    🏗️ Struktur
                  </h4>
                  <p
                    class="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug"
                  >
                    {{ selectedHouse.structure }}
                  </p>
                </div>
                <div
                  class="sm:col-span-2 rounded-[1.5rem] border border-slate-100 bg-slate-50/50 p-5 dark:border-slate-800 dark:bg-slate-900/50"
                >
                  <h4
                    class="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-2"
                  >
                    🏠 Fungsi Utama
                  </h4>
                  <p
                    class="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug"
                  >
                    {{ selectedHouse.mainFunction }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="p-6 border-t border-slate-50 dark:border-slate-800 bg-white dark:bg-slate-950 shrink-0"
            >
              <button
                @click="handleCloseDetail"
                class="w-full rounded-2xl bg-slate-900 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-amber-600 active:scale-95 dark:bg-amber-600 dark:hover:bg-amber-500"
              >
                Kembali ke Daftar
              </button>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<style scoped>
/* Modal Animation */
.modal-bounce-enter-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.modal-bounce-leave-active {
  transition: all 0.25s ease-in;
}
.modal-bounce-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(40px);
}
.modal-bounce-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Custom Slim Scrollbar */
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

/* Masking effect agar user tahu konten bisa di-scroll */
.custom-scrollbar {
  mask-image: linear-gradient(to bottom, black 95%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 95%, transparent 100%);
}
</style>
