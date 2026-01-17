<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUpacaraStore } from "../../../../stores/upacaraStore";
import type { Upacara } from "../../../../data/upacara";
import UpacaraCard from "./UpacaraCard.vue";

const upacaraStore = useUpacaraStore();
const { filtered } = storeToRefs(upacaraStore);

const showDetail = ref(false);
const selectedUpacara = ref<Upacara | null>(null);

const handleOpenDetail = (upacara: Upacara) => {
  selectedUpacara.value = upacara;
  showDetail.value = true;
};

const handleCloseDetail = () => {
  showDetail.value = false;
  selectedUpacara.value = null;
};
</script>

<template>
  <section
    class="min-h-[400px] bg-slate-50/50 px-4 pb-20 pt-8 dark:bg-slate-950/50"
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
          Daftar Upacara Adat
        </h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          Pilih salah satu tradisi untuk mendalami makna dan nilai filosofisnya.
        </p>
      </div>

      <div
        class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-bold text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
      >
        <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
        {{ filtered.length }} Tradisi Ditemukan
      </div>
    </div>

    <div class="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <UpacaraCard
        v-for="(upacara, index) in filtered"
        :key="upacara.id"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: index * 80 } }"
        :upacara="upacara"
        @open-detail="handleOpenDetail"
      />
    </div>

    <div
      v-if="filtered.length === 0"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      class="mx-auto mt-20 flex max-w-md flex-col items-center rounded-3xl border border-dashed border-slate-300 bg-white/50 p-12 text-center dark:border-slate-700 dark:bg-slate-900/50"
    >
      <div class="mb-4 text-4xl opacity-50">🏮</div>
      <h3 class="text-base font-bold text-slate-800 dark:text-white">
        Pencarian Tidak Cocok
      </h3>
      <p class="mt-2 text-xs text-slate-500 dark:text-slate-400">
        Kami tidak menemukan upacara adat dengan kata kunci tersebut. Coba cari
        dengan nama suku atau wilayah lain.
      </p>
    </div>

    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="showDetail && selectedUpacara"
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
              class="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800"
            >
              ✕
            </button>

            <div class="flex flex-col md:flex-row">
              <div class="relative h-56 w-full md:h-auto md:w-5/12">
                <img
                  :src="selectedUpacara.thumbnail"
                  :alt="selectedUpacara.name"
                  class="h-full w-full object-cover"
                />
              </div>

              <div class="flex-1 p-8">
                <span
                  class="inline-block rounded-lg bg-emerald-50 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                >
                  {{ selectedUpacara.region }}
                </span>

                <h3
                  class="mt-3 text-2xl font-bold text-slate-900 dark:text-white"
                >
                  {{ selectedUpacara.name }}
                </h3>

                <p
                  class="text-xs font-semibold text-emerald-600 dark:text-emerald-500"
                >
                  Suku {{ selectedUpacara.tribe }}
                </p>

                <div
                  class="mt-4 border-t border-slate-100 pt-4 dark:border-slate-800"
                >
                  <p
                    class="text-sm leading-relaxed text-slate-600 dark:text-slate-400 italic"
                  >
                    "{{ selectedUpacara.description }}"
                  </p>
                </div>

                <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div class="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50">
                    <p class="text-[10px] font-bold uppercase text-slate-400">
                      Kategori
                    </p>
                    <p
                      class="text-xs font-semibold text-slate-700 dark:text-slate-200 capitalize"
                    >
                      {{ selectedUpacara.category }}
                    </p>
                  </div>
                  <div
                    v-if="selectedUpacara.mainMoment"
                    class="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50"
                  >
                    <p class="text-[10px] font-bold uppercase text-slate-400">
                      Waktu Pelaksanaan
                    </p>
                    <p
                      class="text-xs font-semibold text-slate-700 dark:text-slate-200"
                    >
                      {{ selectedUpacara.mainMoment }}
                    </p>
                  </div>
                </div>

                <button
                  @click="handleCloseDetail"
                  class="mt-8 w-full rounded-2xl bg-slate-900 py-4 text-xs font-bold text-white transition-all hover:bg-emerald-600 dark:bg-emerald-600"
                >
                  Tutup Informasi
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
/* Modal Transition */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Custom Scrollbar for Modal if content is long */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}
</style>
