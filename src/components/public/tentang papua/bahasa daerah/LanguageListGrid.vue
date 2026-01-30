<!-- src/components/public/tentang papua/bahasa/LanguageListGrid.vue -->
<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useLanguageStore } from "../../../../stores/languageStore";
import type { LocalLanguage } from "../../../../data/language";
import LanguageCard from "./LanguageCard.vue";

const languageStore = useLanguageStore();
const { filteredItems } = storeToRefs(languageStore);

const showDetail = ref(false);
const selectedLanguage = ref<LocalLanguage | null>(null);

const handleOpenDetail = (language: LocalLanguage) => {
  selectedLanguage.value = language;
  showDetail.value = true;
};

const handleCloseDetail = () => {
  showDetail.value = false;
  selectedLanguage.value = null;
};
</script>

<template>
  <section
    id="language-list"
    class="bg-slate-50/60 px-4 pb-16 pt-4 sm:px-6 lg:px-8 dark:bg-slate-950/60"
  >
    <div
      class="mx-auto mb-8 flex max-w-6xl items-end justify-between gap-3 px-1"
    >
      <div class="space-y-1">
        <h2
          class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Bahasa Daerah Papua
        </h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          Kenali sapaan, kosakata, dan wilayah penutur dari berbagai bahasa
          lokal.
        </p>
      </div>
      <div class="hidden sm:block">
        <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">
          {{ filteredItems.length }} Bahasa Daerah
        </p>
      </div>
    </div>

    <div class="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <LanguageCard
        v-for="language in filteredItems"
        :key="language.id"
        :language="language"
        @open-detail="handleOpenDetail"
        @toggle-favorite="languageStore.toggleFavorite"
      />

      <!-- kartu placeholder / arsip baru -->
      <article
        class="group relative flex flex-col overflow-hidden rounded-[2rem] border-2 border-dashed border-slate-200 bg-slate-50/50 p-2 transition-all duration-500 dark:border-slate-800 dark:bg-slate-900/30"
      >
        <div
          class="relative h-48 w-full overflow-hidden rounded-[1.7rem] bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center sm:h-52"
        >
          <div
            class="absolute inset-0 animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 dark:via-slate-700/10 to-transparent"
          ></div>

          <div
            class="relative z-10 flex flex-col items-center gap-2 opacity-30 group-hover:opacity-100 transition-all duration-500"
          >
            <span class="text-4xl group-hover:rotate-6 transition-transform"
              >🔤</span
            >
          </div>

          <div
            class="absolute left-3 top-3 inline-flex items-center rounded-xl bg-slate-200/50 dark:bg-slate-800/50 px-3 py-1.5 backdrop-blur-md border border-white/10"
          >
            <div
              class="h-2 w-12 bg-slate-300 dark:bg-slate-700 rounded animate-pulse"
            ></div>
          </div>
        </div>

        <div class="flex flex-1 flex-col px-4 pb-5 pt-4">
          <div class="mb-3">
            <div
              class="h-2 w-24 bg-emerald-500/20 dark:bg-emerald-500/10 rounded animate-pulse mb-2"
            ></div>
            <div class="space-y-2">
              <div
                class="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded animate-pulse"
              ></div>
              <div
                class="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"
              ></div>
            </div>
          </div>

          <div class="space-y-2 mb-4">
            <div
              class="h-1.5 w-full bg-slate-100 dark:bg-slate-800/40 rounded"
            ></div>
            <div
              class="h-1.5 w-full bg-slate-100 dark:bg-slate-800/40 rounded"
            ></div>
          </div>

          <div
            class="mt-auto flex items-center justify-between border-t border-dashed border-slate-200 pt-4 dark:border-slate-800/50"
          >
            <div class="flex gap-2">
              <div
                class="flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800/50 px-2 py-1"
              >
                <div
                  class="h-2 w-8 bg-slate-200 dark:bg-slate-700 rounded"
                ></div>
              </div>
            </div>

            <span
              class="text-[10px] font-black uppercase tracking-widest text-emerald-600/50 dark:text-emerald-500/50 animate-pulse"
            >
              Bahasa Baru
            </span>
          </div>
        </div>

        <div
          class="absolute inset-0 z-20 flex items-center justify-center bg-white/10 dark:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[1px]"
        >
          <div
            class="bg-white/90 dark:bg-slate-800 px-4 py-2 rounded-2xl shadow-xl border border-emerald-500/20"
          >
            <p
              class="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400"
            >
              Arsip Bahasa Segera Ditambah
            </p>
          </div>
        </div>
      </article>
    </div>

    <div
      v-if="filteredItems.length === 0"
      class="mx-auto mt-12 flex max-w-lg flex-col items-center rounded-[2.5rem] border-2 border-dashed border-slate-200 py-16 text-center dark:border-slate-800"
    >
      <span class="text-4xl mb-4">🔤</span>
      <p class="text-slate-800 dark:text-slate-200 font-bold">
        Bahasa tidak ditemukan
      </p>
      <p class="text-sm text-slate-500 mt-1">
        Coba gunakan kata kunci atau filter lain.
      </p>
    </div>

    <!-- Modal detail -->
    <Teleport to="body">
      <transition name="modal-bounce">
        <div
          v-if="showDetail && selectedLanguage"
          class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-md"
          @click.self="handleCloseDetail"
        >
          <div
            class="relative flex flex-col max-h-[92vh] w-full max-w-2xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl dark:border dark:border-slate-800 dark:bg-slate-950"
          >
            <button
              @click="handleCloseDetail"
              class="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-all hover:bg-emerald-500 hover:scale-110"
            >
              ✕
            </button>

            <div class="relative h-56 w-full shrink-0 sm:h-64">
              <img
                :src="selectedLanguage.thumbnail"
                :alt="selectedLanguage.name"
                class="h-full w-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-4 left-8">
                <span
                  class="rounded-md bg-emerald-500 px-2 py-1 text-[9px] font-black uppercase tracking-tighter text-white"
                >
                  {{ selectedLanguage.region }} • {{ selectedLanguage.area }}
                </span>
                <h2
                  class="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl mt-1"
                >
                  {{ selectedLanguage.name }}
                </h2>
              </div>
            </div>

            <div
              class="flex-1 overflow-y-auto custom-scrollbar px-8 pb-6 pt-4 sm:px-10"
            >
              <p
                class="text-base leading-relaxed text-slate-600 dark:text-slate-400 mb-6"
              >
                {{ selectedLanguage.description }}
              </p>

              <div class="grid gap-4 sm:grid-cols-2 mb-8">
                <div
                  v-if="selectedLanguage.usageDomain"
                  class="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-900/50"
                >
                  <h4
                    class="text-[9px] font-black uppercase tracking-widest text-emerald-500 mb-1"
                  >
                    Penggunaan
                  </h4>
                  <p
                    class="text-sm font-bold text-slate-800 dark:text-slate-200"
                  >
                    {{ selectedLanguage.usageDomain }}
                  </p>
                </div>

                <div
                  v-if="selectedLanguage.numberOfSpeakers"
                  class="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-900/50"
                >
                  <h4
                    class="text-[9px] font-black uppercase tracking-widest text-emerald-500 mb-1"
                  >
                    Perkiraan Penutur
                  </h4>
                  <p
                    class="text-sm font-bold text-slate-800 dark:text-slate-200"
                  >
                    {{ selectedLanguage.numberOfSpeakers }}
                  </p>
                </div>

                <div
                  v-if="selectedLanguage.isEndangered"
                  class="rounded-2xl border border-rose-100 bg-rose-50/60 p-4 dark:border-rose-900/40 dark:bg-rose-950/20"
                >
                  <h4
                    class="text-[9px] font-black uppercase tracking-widest text-rose-500 mb-1"
                  >
                    Status Bahasa
                  </h4>
                  <p class="text-sm font-bold text-rose-700 dark:text-rose-200">
                    Terancam punah, butuh lebih banyak penutur muda.
                  </p>
                </div>

                <div
                  v-if="selectedLanguage.exampleGreeting"
                  class="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/20"
                >
                  <h4
                    class="text-[9px] font-black uppercase tracking-widest text-emerald-500 mb-1"
                  >
                    Contoh Sapaan
                  </h4>
                  <p
                    class="text-lg font-bold text-slate-900 dark:text-slate-100 italic"
                  >
                    “{{ selectedLanguage.exampleGreeting }}”
                  </p>
                  <p
                    v-if="selectedLanguage.exampleMeaning"
                    class="mt-1 text-sm text-slate-700 dark:text-slate-300"
                  >
                    {{ selectedLanguage.exampleMeaning }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="p-6 bg-white dark:bg-slate-950 border-t border-slate-50 dark:border-slate-800 shrink-0"
            >
              <button
                @click="handleCloseDetail"
                class="w-full rounded-2xl bg-slate-900 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-emerald-600 active:scale-95 dark:bg-emerald-600"
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      </transition>
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
    opacity: 0.4;
  }
}

.modal-bounce-enter-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.modal-bounce-leave-active {
  transition: all 0.2s ease-in;
}
.modal-bounce-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(40px);
}
.modal-bounce-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #334155;
}

.custom-scrollbar {
  mask-image: linear-gradient(to bottom, black 95%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 95%, transparent 100%);
}
</style>
