<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useSenjataStore } from "../../../../stores/senjataStore";
import type { Senjata } from "../../../../data/senjata";
import SenjataCard from "./SenjataCard.vue";

const senjataStore = useSenjataStore();
const { filtered } = storeToRefs(senjataStore);

const showDetail = ref(false);
const selectedSenjata = ref<Senjata | null>(null);

const handleOpenDetail = (senjata: Senjata) => {
  selectedSenjata.value = senjata;
  showDetail.value = true;
};

const handleCloseDetail = () => {
  showDetail.value = false;
  selectedSenjata.value = null;
};
</script>

<template>
  <section
    class="min-h-screen bg-slate-50/50 px-4 pb-20 pt-10 dark:bg-slate-950/50"
  >
    <div
      v-motion
      :initial="{ opacity: 0, x: -20 }"
      :enter="{ opacity: 1, x: 0 }"
      class="mx-auto mb-10 flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
    >
      <div class="space-y-1">
        <h2
          class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
        >
          Koleksi Senjata Tradisional
        </h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          Jelajahi keunikan fungsi dan nilai budaya di setiap artefak.
        </p>
      </div>
      <div
        class="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
          ></span>
          <span
            class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"
          ></span>
        </span>
        {{ filtered.length }} Koleksi Tersedia
      </div>
    </div>

    <div class="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <SenjataCard
        v-for="(senjata, index) in filtered"
        :key="senjata.id"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
        :senjata="senjata"
        @open-detail="handleOpenDetail"
        @toggle-favorite="senjataStore.toggleFavorite"
      />
      <article
        class="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 transition-all duration-500 dark:border-slate-800 dark:bg-slate-900/30"
      >
        <div
          class="relative h-40 w-full overflow-hidden bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center sm:h-44"
        >
          <div
            class="absolute inset-0 animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 dark:via-slate-700/10 to-transparent"
          ></div>

          <div
            class="relative z-10 flex flex-col items-center gap-2 opacity-30 group-hover:opacity-100 transition-all duration-500"
          >
            <span
              class="text-4xl group-hover:scale-110 group-hover:-rotate-12 transition-transform"
              >🏹</span
            >
          </div>

          <div
            class="absolute left-3 top-3 inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-800 px-3 py-1"
          >
            <div
              class="mr-1.5 h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-600 animate-pulse"
            />
            <div class="h-2 w-10 bg-slate-300 dark:bg-slate-700 rounded"></div>
          </div>
        </div>

        <div class="flex flex-1 flex-col px-4 pb-4 pt-3">
          <header>
            <div class="space-y-2 mb-2">
              <div
                class="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"
              ></div>
            </div>
          </header>

          <div
            class="h-2 w-40 bg-emerald-500/20 dark:bg-emerald-500/10 rounded mb-4 animate-pulse"
          ></div>

          <div class="space-y-2">
            <div
              class="h-2 w-full bg-slate-100 dark:bg-slate-800/40 rounded"
            ></div>
            <div
              class="h-2 w-full bg-slate-100 dark:bg-slate-800/40 rounded"
            ></div>
          </div>

          <div
            class="mt-auto pt-4 flex items-center justify-between border-t border-dashed border-slate-200 dark:border-slate-800/50"
          >
            <div class="flex gap-1.5">
              <div
                class="h-5 w-16 rounded-full bg-slate-100 dark:bg-slate-800"
              ></div>
              <div
                class="h-5 w-12 rounded-full bg-slate-100 dark:bg-slate-800"
              ></div>
            </div>

            <span
              class="text-[10px] font-black uppercase tracking-widest text-emerald-600/40 dark:text-emerald-500/40 animate-pulse"
            >
              Pusaka Baru
            </span>
          </div>
        </div>

        <div
          class="absolute inset-0 z-20 flex items-center justify-center bg-white/5 dark:bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[1px]"
        >
          <div
            class="bg-white/90 dark:bg-slate-800 px-4 py-2 rounded-xl shadow-xl border border-emerald-500/20"
          >
            <p
              class="text-[9px] font-black uppercase tracking-widest text-slate-800 dark:text-emerald-400"
            >
              Riset Pusaka Sedang Berlangsung
            </p>
          </div>
        </div>
      </article>
    </div>

    <div
      v-if="filtered.length === 0"
      v-motion
      :initial="{ scale: 0.9, opacity: 0 }"
      :enter="{ scale: 1, opacity: 1 }"
      class="mx-auto mt-20 flex max-w-md flex-col items-center rounded-[2.5rem] border border-dashed border-slate-300 bg-white/50 p-12 text-center backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50"
    >
      <div
        class="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-4xl dark:bg-slate-800"
      >
        🔍
      </div>
      <h3 class="text-lg font-bold text-slate-900 dark:text-white">
        Tidak Ditemukan
      </h3>
      <p
        class="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed"
      >
        Maaf, kami tidak menemukan senjata yang sesuai dengan kata kunci Anda.
        Coba gunakan istilah lain seperti "Busur" atau "Tombak".
      </p>
    </div>

    <Teleport to="body">
      <Transition name="modal-bounce">
        <div
          v-if="showDetail && selectedSenjata"
          class="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
        >
          <div
            class="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            @click="handleCloseDetail"
          />

          <div
            class="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2.5rem] border border-white/20 bg-white shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)] dark:bg-slate-900"
          >
            <button
              @click="handleCloseDetail"
              class="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-transform hover:scale-110 active:scale-95"
            >
              ✕
            </button>

            <div class="flex flex-col md:flex-row">
              <div class="relative h-64 w-full md:h-auto md:w-5/12">
                <img
                  :src="selectedSenjata.thumbnail"
                  :alt="selectedSenjata.name"
                  class="h-full w-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r"
                />
              </div>

              <div class="flex-1 p-8">
                <div class="mb-4">
                  <span
                    class="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400"
                  >
                    {{ selectedSenjata.region }}
                  </span>
                  <h3
                    class="mt-2 text-3xl font-bold text-slate-900 dark:text-white"
                  >
                    {{ selectedSenjata.name }}
                  </h3>
                  <p
                    class="text-sm font-medium text-emerald-600 dark:text-emerald-400"
                  >
                    Suku {{ selectedSenjata.tribe }}
                  </p>
                </div>

                <div class="space-y-4">
                  <p
                    class="text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                  >
                    {{ selectedSenjata.description }}
                  </p>

                  <div
                    class="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 dark:border-slate-800"
                  >
                    <div>
                      <p class="text-[10px] font-bold uppercase text-slate-400">
                        Jenis
                      </p>
                      <p
                        class="text-sm font-semibold capitalize text-slate-800 dark:text-slate-200"
                      >
                        {{ selectedSenjata.type.replace("-", " ") }}
                      </p>
                    </div>
                    <div v-if="selectedSenjata.usage?.length">
                      <p class="text-[10px] font-bold uppercase text-slate-400">
                        Fungsi
                      </p>
                      <p
                        class="text-sm font-semibold text-slate-800 dark:text-slate-200"
                      >
                        {{ selectedSenjata.usage[0] }}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  @click="handleCloseDetail"
                  class="mt-8 w-full rounded-2xl bg-slate-900 py-4 text-sm font-bold text-white transition-all hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500"
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
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}
/* Modal Animation */
.modal-bounce-enter-active {
  animation: modal-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.modal-bounce-leave-active {
  animation: modal-in 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) reverse;
}

@keyframes modal-in {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Transisi Backdrop */
.modal-bounce-enter-active .absolute,
.modal-bounce-leave-active .absolute {
  transition: opacity 0.3s ease;
}
</style>
